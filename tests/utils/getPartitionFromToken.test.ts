import { getPartitionFromToken } from "../../src/utils/getPartitionFromToken";

describe("getPartitionFromToken() function", () => {
  test('Give token is B1A5nhQST2r3K4H, then should return "72"', () => {
    const expectValue = "72";
    const result = getPartitionFromToken("B1A5nhQST2r3K4H");
    expect(result).toBe(expectValue);
  });

  test('Give token is B1AGY8gBY1I1nym, then should return "72"', () => {
    const expectValue = "72";
    const result = getPartitionFromToken("B1AGY8gBY1I1nym");
    expect(result).toBe(expectValue);
  });

  test('Give token is B1AG6XBub2QnCol, then should return "72"', () => {
    const expectValue = "72";
    const result = getPartitionFromToken("B1AG6XBub2QnCol");
    expect(result).toBe(expectValue);
  });

  test('Give token is B1AG4Tcsm1OG3pH, then should return "72"', () => {
    const expectValue = "72";
    const result = getPartitionFromToken("B1AG4Tcsm1OG3pH");
    expect(result).toBe(expectValue);
  });

  test('Give token is ArAG4Tcsm1OG3pH, then should return "53"', () => {
    const expectValue = "53";
    const result = getPartitionFromToken("ArAG4Tcsm1OG3pH");
    expect(result).toBe(expectValue);
  });

  test('Give token is A1AG4Tcsm1OG3pH, then should return "01"', () => {
    const expectValue = "01";
    const result = getPartitionFromToken("A1AG4Tcsm1OG3pH");
    expect(result).toBe(expectValue);
  });
});
