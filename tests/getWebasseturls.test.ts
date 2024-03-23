import { getWebasseturls } from "../src/getWebasseturls/getWebasseturls";
import { WebasseturlResponse } from "../src/getWebasseturls/types";

describe("getWebasseturls() function", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Give partition is 72 and token is B1AG6XBub2QnCol, then should call correct sharedstreams url and return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";
    const mockPhotoGuids = ["photoGuids1", "photoGuids2"];
    const mockSharedstreamsUrl = `https://p${mockPartition}-sharedstreams.icloud.com/${mockToken}/sharedstreams/webasseturls`;
    const expectResponse: WebasseturlResponse = {
      locations: {
        "cvws.icloud-content.com": {
          scheme: "mockScheme",
          hosts: ["mockHost"],
        },
      },
      items: {
        "01df1a2d1ff364b67a61ef81125df36b9a7e1e436a": {
          url_expiry: "2024-03-21T18:27:55Z",
          url_location: "cvws.icloud-content.com",
          url_path:
            "/S/Ad8aLR_zZLZ6Ye-BEl3za5p-HkNq/IMG_4964.JPG?o=ApkyFnp0_zVzJ8GYL2noiv8CjDCW9fK0zCpBWAkNaS13&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogFynneUgdg-KahYMyuwQAVe8u-U4pm1kSKVR1-X4GyWMSaRCP_ICN5jEYj5OUkuYxIgEAUgR-HkNqaieJIlxRBZ9NNPJrYKXdnrZYOo-gzyc4_Ml_pdKw0P-5p-Ak7DWDHydyJ83_RrHIs-EpPR42H6Lz0C0k_-WrB2z7MiVbMJ2_Ha6tAB4lGbMvlQ&e=1711045675&r=70782549-6e6a-44bc-8980-33975d411016-18&s=diqy_kRYV9cjyvK5x4YKNwjbHa0",
        },
      },
    };
    const mockRequest: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ photoGuids: mockPhotoGuids }),
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expectResponse),
      })
    ) as jest.Mock;

    const actual = await getWebasseturls(
      mockPartition,
      mockToken,
      mockPhotoGuids
    );

    expect(global.fetch).toHaveBeenCalledWith(
      mockSharedstreamsUrl,
      mockRequest
    );
    expect(actual).toBe(expectResponse);
  });

  test("Give fetch data fail, then should call correct sharedstreams url and return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";
    const mockPhotoGuids = ["photoGuids1", "photoGuids2"];
    const mockSharedstreamsUrl = `https://p${mockPartition}-sharedstreams.icloud.com/${mockToken}/sharedstreams/webasseturls`;
    const expectResponse: WebasseturlResponse = {
      locations: {
        "cvws.icloud-content.com": {
          scheme: "mockScheme",
          hosts: ["mockHost"],
        },
      },
      items: {
        "01df1a2d1ff364b67a61ef81125df36b9a7e1e436a": {
          url_expiry: "2024-03-21T18:27:55Z",
          url_location: "cvws.icloud-content.com",
          url_path:
            "/S/Ad8aLR_zZLZ6Ye-BEl3za5p-HkNq/IMG_4964.JPG?o=ApkyFnp0_zVzJ8GYL2noiv8CjDCW9fK0zCpBWAkNaS13&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogFynneUgdg-KahYMyuwQAVe8u-U4pm1kSKVR1-X4GyWMSaRCP_ICN5jEYj5OUkuYxIgEAUgR-HkNqaieJIlxRBZ9NNPJrYKXdnrZYOo-gzyc4_Ml_pdKw0P-5p-Ak7DWDHydyJ83_RrHIs-EpPR42H6Lz0C0k_-WrB2z7MiVbMJ2_Ha6tAB4lGbMvlQ&e=1711045675&r=70782549-6e6a-44bc-8980-33975d411016-18&s=diqy_kRYV9cjyvK5x4YKNwjbHa0",
        },
      },
    };
    const mockRequest: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ photoGuids: mockPhotoGuids }),
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(expectResponse),
      })
    ) as jest.Mock;

    const actual = await getWebasseturls(
      mockPartition,
      mockToken,
      mockPhotoGuids
    );

    expect(global.fetch).toHaveBeenCalledWith(
      mockSharedstreamsUrl,
      mockRequest
    );
    expect(actual).toBe(null);
  });

  test("Give fetch data network error, then should return correct data.", async () => {
    const mockPartition = "72";
    const mockToken = "B1AG6XBub2QnCol";
    const mockPhotoGuids = ["photoGuids1", "photoGuids2"];

    global.fetch = jest.fn(() =>
      Promise.reject(new Error("network error"))
    ) as jest.Mock;

    const actual = await getWebasseturls(
      mockPartition,
      mockToken,
      mockPhotoGuids
    );

    expect(actual).toBe(null);
  });
});
