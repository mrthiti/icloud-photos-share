import { getWebstream } from "../src/getWebstream/getWebstream";
import { WebstreamResponse } from "../src/getWebstream/types";

describe("getWebstream() function", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Give partition is 72 and token is B1AG6XBub2QnCol, then should call correct sharedstreams url and return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";
    const mockSharedstreamsUrl = `https://p${mockPartition}-sharedstreams.icloud.com/${mockToken}/sharedstreams/webstream`;
    const expectResponse: WebstreamResponse = {
      photos: [
        {
          photoGuid: "656EEA81-A5CE-425E-B528-22407B0940F3",
          derivatives: {
            "2049": {
              fileSize: "702722",
              checksum: "01e7cfcf25ea502b67552bf64a4270fa2990e5cc79",
              width: "1537",
              height: "2049",
            },
          },
        },
      ],
    };
    const mockRequest: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ streamCtag: null }),
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expectResponse),
      })
    ) as jest.Mock;

    const actual = await getWebstream(mockPartition, mockToken);

    expect(global.fetch).toHaveBeenCalledWith(
      mockSharedstreamsUrl,
      mockRequest
    );
    expect(actual).toBe(expectResponse);
  });

  test("Give fetch data fail, then should call correct sharedstreams url and return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";
    const mockSharedstreamsUrl = `https://p${mockPartition}-sharedstreams.icloud.com/${mockToken}/sharedstreams/webstream`;
    const expectResponse = "Mock Response data from fetch() function";
    const mockRequest: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ streamCtag: null }),
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(expectResponse),
      })
    ) as jest.Mock;

    const actual = await getWebstream(mockPartition, mockToken);

    expect(global.fetch).toHaveBeenCalledWith(
      mockSharedstreamsUrl,
      mockRequest
    );
    expect(actual).toBe(null);
  });

  test("Give fetch network error, then should return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";

    global.fetch = jest.fn(() =>
      Promise.reject(new Error("network error"))
    ) as jest.Mock;

    const actual = await getWebstream(mockPartition, mockToken);

    expect(actual).toBe(null);
  });
});
