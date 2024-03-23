export type ResultData<T = void> =
  | {
      error: true;
      message: string;
    }
  | {
      error: false;
      data: T;
    };
