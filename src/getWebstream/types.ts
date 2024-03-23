export type WebstreamResponse = {
  photos: Photo[];
};

export type Photo = {
  photoGuid: string;
  mediaAssetType?: string;
  derivatives: Derivatives;
};

export type Derivatives = {
  [Key: string]: Derivative;
};

export type Derivative = {
  fileSize: string;
  checksum: string;
  width: string;
  height: string;
};
