import { getPartitionFromToken } from "./utils/getPartitionFromToken";
import { getWebstream } from "./getWebstream/getWebstream";
import { getWebasseturls } from "./getWebasseturls/getWebasseturls";
import { DataResponse, Derivatives } from "./types";
import { Photo as WebstreamPhoto } from "./getWebstream/types";
import { Result } from "./utils/Result/Result";
import { ResultData } from "./utils/Result/types";

export type IcloudPhotosShareResponse = ResultData<DataResponse>;

export async function icloudPhotosShare(
  token: string
): Promise<IcloudPhotosShareResponse> {
  const partition = getPartitionFromToken(token);

  const resWebstream = await getWebstream(partition, token);
  if (!resWebstream) {
    return Result.error("Not found.");
  }

  const resWebasseturls = await getWebasseturls(
    partition,
    token,
    resWebstream.photos.map((it: WebstreamPhoto) => it.photoGuid)
  );
  if (!resWebasseturls) {
    return Result.error("Not found.");
  }

  const responseData: DataResponse = { photos: [] };

  for (const photo of resWebstream.photos) {
    let derivatives: Derivatives = {};

    for (const derivativeKey in photo.derivatives) {
      const photoAssetItem =
        resWebasseturls.items[photo.derivatives[derivativeKey].checksum];
      const location = resWebasseturls.locations[photoAssetItem.url_location];
      const host = `${location.scheme}://${location.hosts[0]}`;
      const urlPath = photoAssetItem.url_path;

      derivatives = {
        ...derivatives,
        [derivativeKey]: {
          ...photo.derivatives[derivativeKey],
          mediaUrl: `${host}${urlPath}`,
        },
      };
    }
    responseData.photos.push({
      mediaAssetType: photo.mediaAssetType,
      derivatives,
    });
  }

  return Result.data(responseData);
}
