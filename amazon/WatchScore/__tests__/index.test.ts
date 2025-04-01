import { getMinScore } from "..";

describe("Amazon - getMinScore", () => {
  it("handles large input efficiently", () => {
    const watchHistory = Array(50000).fill(1).concat(Array(50000).fill(2));
    const series1 = 1;
    const series2 = 2;
    expect(getMinScore(watchHistory, series1, series2)).toBe(2);
  });

  describe.each([
    {
      name: "minimal case with two distinct series",
      watchHistory: [1, 2],
      series1: 1,
      series2: 2,
      expected: 2,
    },
    {
      name: "same series ID used for both series1 and series2",
      watchHistory: [1, 2, 3, 5, 1],
      series1: 5,
      series2: 5,
      expected: 1,
    },
    {
      name: "both series appear once, surrounded by others",
      watchHistory: [6, 1, 1, 2, 3, 8, 5, 2],
      series1: 1,
      series2: 5,
      expected: 5,
    },
    {
      name: "series1 and series2 the same, appearing multiple times",
      watchHistory: [1, 2, 3, 1],
      series1: 1,
      series2: 1,
      expected: 1,
    },
    {
      name: "series1 and series2 in long list, multiple valid subarrays",
      watchHistory: [5, 2, 5, 4, 2, 5, 3, 1, 7, 15, 7, 9],
      series1: 5,
      series2: 7,
      expected: 4,
    },
    {
      name: "multiple minimal subarrays possible, chooses the shortest",
      watchHistory: [2, 5, 1, 1, 4, 2, 1],
      series1: 1,
      series2: 2,
      expected: 2,
    },
    {
      name: "series appear with interleaved content, longer but optimal subarray exists",
      watchHistory: [2, 5, 1, 8, 4, 2, 2, 3, 1],
      series1: 1,
      series2: 2,
      expected: 3,
    },
    {
      name: "multiple possible intervals, smallest has 3 unique series",
      watchHistory: [1, 4, 2, 1, 2, 5, 1, 2],
      series1: 1,
      series2: 2,
      expected: 2,
    },
    {
      name: "series1 at start, series2 at end",
      watchHistory: [3, 4, 5, 6, 7, 8, 9, 10],
      series1: 3,
      series2: 10,
      expected: 8,
    },
    {
      name: "series1 at start, series2 at end, same number in between",
      watchHistory: [5, 3, 3, 3, 1],
      series1: 1,
      series2: 5,
      expected: 3,
    },
    {
      name: "returns correct score when best window is between repeated series1 and series2",
      watchHistory: [5, 2, 5, 4, 2, 5, 3, 1, 7, 15, 7, 9],
      series1: 5,
      series2: 7,
      expected: 4,
    },
  ])(
    "should return $expected for case: $name",
    ({ watchHistory, series1, series2, expected }) => {
      it(`returns ${expected} for series1=${series1}, series2=${series2} in [${watchHistory.join(
        ", "
      )}]`, () => {
        expect(getMinScore(watchHistory, series1, series2)).toBe(expected);
      });
    }
  );
});
