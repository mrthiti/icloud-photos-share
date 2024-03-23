import { icloudPhotosShare } from "../src";
import { WebasseturlResponse } from "../src/getWebasseturls/types";
import { WebstreamResponse } from "../src/getWebstream/types";
import { Photo as WebstreamPhoto } from "../src/getWebstream/types";

jest.mock("../src/utils/getPartitionFromToken");
jest.mock("../src/getWebstream/getWebstream");
jest.mock("../src/getWebasseturls/getWebasseturls");

/* eslint-disable @typescript-eslint/no-var-requires */
const { getPartitionFromToken } = require("../src/utils/getPartitionFromToken");
const { getWebstream } = require("../src/getWebstream/getWebstream");
const { getWebasseturls } = require("../src/getWebasseturls/getWebasseturls");
/* eslint-disable @typescript-eslint/no-var-requires */

const mockGetWebstream: WebstreamResponse = {
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

const mockGetWebasseturls: WebasseturlResponse = {
  locations: {
    "cvws.icloud-content.com": {
      scheme: "https",
      hosts: ["cvws.icloud-content.com"],
    },
  },
  items: {
    "01e7cfcf25ea502b67552bf64a4270fa2990e5cc79": {
      url_expiry: "2024-03-21T18:27:55Z",
      url_location: "cvws.icloud-content.com",
      url_path:
        "/S/Ad8aLR_zZLZ6Ye-BEl3za5p-HkNq/IMG_4964.JPG?o=ApkyFnp0_zVzJ8GYL2noiv8CjDCW9fK0zCpBWAkNaS13&v=1&z=https%3A%2F%2Fp72-content.icloud.com%3A443&x=1&a=CAogFynneUgdg-KahYMyuwQAVe8u-U4pm1kSKVR1-X4GyWMSaRCP_ICN5jEYj5OUkuYxIgEAUgR-HkNqaieJIlxRBZ9NNPJrYKXdnrZYOo-gzyc4_Ml_pdKw0P-5p-Ak7DWDHydyJ83_RrHIs-EpPR42H6Lz0C0k_-WrB2z7MiVbMJ2_Ha6tAB4lGbMvlQ&e=1711045675&r=70782549-6e6a-44bc-8980-33975d411016-18&s=diqy_kRYV9cjyvK5x4YKNwjbHa0",
    },
  },
};

describe("icloudPhotosShare() function", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Give data from icloud correct, then should currect mediaUrl data.", async () => {
    const mockToken = "B1AG6XBub2QnCol";
    const mockPartition = "72";
    const expectScheme =
      mockGetWebasseturls.locations["cvws.icloud-content.com"].scheme;
    const expectHost =
      mockGetWebasseturls.locations["cvws.icloud-content.com"].hosts[0];
    const expectUrlPath =
      mockGetWebasseturls.items["01e7cfcf25ea502b67552bf64a4270fa2990e5cc79"]
        .url_path;
    const expectMediaUrl = `${expectScheme}://${expectHost}${expectUrlPath}`;

    getPartitionFromToken.mockImplementation(() => mockPartition);
    getWebstream.mockImplementation(() => Promise.resolve(mockGetWebstream));
    getWebasseturls.mockImplementation(() =>
      Promise.resolve(mockGetWebasseturls)
    );

    const actual = await icloudPhotosShare(mockToken);

    expect(getPartitionFromToken).toHaveBeenCalledWith(mockToken);
    expect(getWebstream).toHaveBeenCalledWith(mockPartition, mockToken);
    expect(getWebasseturls).toHaveBeenCalledWith(
      mockPartition,
      mockToken,
      mockGetWebstream.photos.map((it: WebstreamPhoto) => it.photoGuid)
    );
    expect(
      !actual.error && actual.data.photos.pop()?.derivatives["2049"].mediaUrl
    ).toBe(expectMediaUrl);
  });

  test("Give getWebstream return null, then should return error is true", async () => {
    const mockToken = "B1AG6XBub2QnCol";
    const mockPartition = "72";

    getPartitionFromToken.mockImplementation(() => mockPartition);
    getWebstream.mockImplementation(() => Promise.resolve(null));
    getWebasseturls.mockImplementation(() =>
      Promise.resolve(mockGetWebasseturls)
    );

    const actual = await icloudPhotosShare(mockToken);

    expect(getPartitionFromToken).toHaveBeenCalledWith(mockToken);
    expect(getWebstream).toHaveBeenCalledWith(mockPartition, mockToken);
    expect(getWebasseturls).not.toHaveBeenCalled();
    expect(actual.error).toBe(true);
  });

  test("Give getWebasseturls return null, then should return error is true", async () => {
    const mockToken = "B1AG6XBub2QnCol";
    const mockPartition = "72";

    getPartitionFromToken.mockImplementation(() => mockPartition);
    getWebstream.mockImplementation(() => Promise.resolve(mockGetWebstream));
    getWebasseturls.mockImplementation(() => Promise.resolve(null));

    const actual = await icloudPhotosShare(mockToken);

    expect(getPartitionFromToken).toHaveBeenCalledWith(mockToken);
    expect(getWebstream).toHaveBeenCalledWith(mockPartition, mockToken);
    expect(getWebasseturls).toHaveBeenCalledWith(
      mockPartition,
      mockToken,
      mockGetWebstream.photos.map((it: WebstreamPhoto) => it.photoGuid)
    );
    expect(actual.error).toBe(true);
  });
});
