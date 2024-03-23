// export type PhotoShareResponse =
//   | {
//       error: true;
//       message: string;
//     }
//   | {
//       error: false;
//       data: DataResponse;
//     };

export type DataResponse = {
  photos: Photo[];
};

export type ErrorResponse = {
  code: string;
  message: string;
};

export type Photo = {
  mediaAssetType?: string;
  derivatives: Derivatives;
};

export type Derivatives = {
  [Key: string]: Derivative;
};

export type Derivative = {
  mediaUrl: string;
  fileSize: string;
  checksum: string;
  width: string;
  height: string;
};
