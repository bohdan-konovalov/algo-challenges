// Time: O(n); Space: O(n)
export const getMinScore = (
  watchHistory: number[],
  series1: number,
  series2: number
): number => {
  // Early return, as we are guaranteed to have at least one occurrence of both series1 and series2
  // And since they are identical, minScore would constantly be 1
  if (series1 === series2) return 1;

  let minScore = watchHistory.length;
  let startSeries: number | null = null;
  const distinctSeriesBetweenStartAndEnd = new Set();

  for (const series of watchHistory) {
    const startOrEndSeries = series1 === series || series2 === series;
    const startWasFound = startSeries !== null;

    if (startOrEndSeries) {
      const endFound = startWasFound && startSeries !== series;

      if (endFound) {
        // Increasing by 2 to account for the start and end unique series
        const score = distinctSeriesBetweenStartAndEnd.size + 2;

        if (score < minScore) {
          // Early return if we have found the minimum possible score
          if (score === 2) {
            return 2;
          }
          minScore = score;
        }
      }

      startSeries = series;
      distinctSeriesBetweenStartAndEnd.clear();
    } else if (startWasFound) {
      distinctSeriesBetweenStartAndEnd.add(series);
    }
  }

  return minScore;
};
