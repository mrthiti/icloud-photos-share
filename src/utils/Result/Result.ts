import { ResultData } from "./types";

export class Result {
  static data<T>(data: T): ResultData<T> {
    return { error: false, data };
  }

  static error<T>(message: string): ResultData<T> {
    return { error: true, message };
  }
}
