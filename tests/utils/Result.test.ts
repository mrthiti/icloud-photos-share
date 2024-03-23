import { Result } from "../../src/utils/Result/Result";
import { ResultData } from "../../src/utils/Result/types";

describe("Result Class", () => {
  test("Give data is string, then should return correct type", () => {
    const ecpectData = "mock string data.";
    const result = Result.data(ecpectData);

    expect(result).toBeInstanceOf<ResultData>;
  });

  test("Give data is string, then should return correct data", () => {
    const ecpectData = "mock string data.";
    const result = Result.data(ecpectData);

    expect(result).toBeInstanceOf<ResultData>;
    expect(result.error).toBe(false);
    expect(result.error || result.data).toBe(ecpectData);
  });

  test("Give error message, then should return correct type", () => {
    const result = Result.error("mock error message.");

    expect(result).toBeInstanceOf<ResultData>;
  });

  test("Give error message, then should return correct message", () => {
    const expectErrorMessage = "mock error message.";
    const result = Result.error(expectErrorMessage);

    expect(result.error).toBe(true);
    expect(result.error && result.message).toBe(expectErrorMessage);
  });
});
