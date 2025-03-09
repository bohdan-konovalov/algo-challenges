import { getMinScore } from "..";

describe("getMinScore", () => {
  it("should return correct watch score for sample case 0", () => {
    expect(getMinScore([1, 2, 2, 2, 5, 2], 1, 5)).toBe(3);
  });

  it("should return correct watch score for sample case 1", () => {
    expect(getMinScore([1, 2, 3, 5, 1], 5, 5)).toBe(1);
  });
});
