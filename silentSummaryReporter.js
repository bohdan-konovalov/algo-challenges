// Helper functions for bold + color
const BOLD_RED = (text) => `\x1b[1m\x1b[31m${text}\x1b[0m`;
const BOLD_GREEN = (text) => `\x1b[1m\x1b[32m${text}\x1b[0m`;

class SilentSummaryReporter {
  onRunComplete(_, results) {
    const {
      numFailedTestSuites,
      numPassedTestSuites,
      numTotalTestSuites,
      numFailedTests,
      numPassedTests,
      numTotalTests,
      snapshot,
      startTime,
    } = results;

    const time = ((Date.now() - startTime) / 1000).toFixed(3);

    console.log(""); // blank line

    // Test Suites summary
    const testSuitesSummary = [
      numFailedTestSuites > 0
        ? BOLD_RED(`${numFailedTestSuites} failed`)
        : null,
      numPassedTestSuites > 0
        ? BOLD_GREEN(`${numPassedTestSuites} passed`)
        : null,
      `${numTotalTestSuites} total`,
    ]
      .filter(Boolean)
      .join(", ");
    console.log(`Test Suites: ${testSuitesSummary}`);

    // Tests summary
    const testsSummary = [
      numFailedTests > 0 ? BOLD_RED(`${numFailedTests} failed`) : null,
      numPassedTests > 0 ? BOLD_GREEN(`${numPassedTests} passed`) : null,
      `${numTotalTests} total`,
    ]
      .filter(Boolean)
      .join(", ");
    console.log(`Tests:       ${testsSummary}`);

    // Snapshots
    console.log(`Snapshots:   ${snapshot.total} total`);

    // Time
    console.log(`Time:        ${time} s`);
  }

  onTestStart() {}
  onTestResult() {}
}

module.exports = SilentSummaryReporter;
