# Writing Unit Tests

## Task Requirements

1. Create the folder src/tests and the emailValidator.test.js test file in it. This file will be used to cover the functionality of the file src/email-validator.js. For a start, add there the simplest test like the one presented below:

```js
const assert = require("assert");

describe("first test", () => {
  it("should return 4", () => {
    assert.equal(2 + 2, 4);
  });
});
```

2. Set up the testing environment using the libraries mocha and chai. To complete this step, get back to the course materials or follow the instructions in this article (if it is needed). Make sure the test added in the previous step passes successfully. This way, you will ensure that your test environment setup is done correctly.
3. Use script "npm run test:local" which runs all tests in the src/tests folder using mocha.
4. Create three functions in the email-validator.js file:

- Export the validateAsync(email) function It returns true asynchronously if the email contains a valid ending, or false otherwise. Use the Promise API for that.
- Export the validateWithThrow(email) function It returns true if the email contains a valid ending. Otherwise, it throws an error with a message that the provided email is invalid.
- Export the validateWithLog(email) function It behaves exactly in the same way as validate(). The only addition is that it logs the result to the console (using console.log) before returning it.

5. Use your knowledge obtained from the course to cover the validateAsync() function with tests. Test all scenarios.
6. Use your knowledge obtained from the course to cover the validateWithThrow() function with tests. In case if the email is invalid, you should test that an error with a proper message is thrown.
7. Use your knowledge obtained from the course to cover the validateWithLog() function with tests. The behavior of console.log() should be replaced using the knowledge of test doubles. In this case, logging is a side effect that we want to avoid during tests. Make sure to restore the original behavior after the test.
8. Create npm script "coverage" using nyc. Make sure that the overall coverage for the email-validator.js file is 100%. Also, make sure that the report does not contain the test files (for example, emailValidator.test.js). Take a screenshot with a code coverage report and save them in the 'src/images' folder.
9. Run the Lighthouse audit on your app for Performance, Accessibility, SEO (Search Engine Optimization), and Best Practices.
10. Make sure your scores for the specified categories are higher than 90%. If they are lower, you need to examine the report and handle the issues according to the provided suggestions.
11. Even though you might have all scores higher than 90%, you need to handle at least three problems found by this audit check. Take screenshots of reports before and after you handled each issue and save them in the 'src/images' folder
12. Complete the task on the Autocode platform.

### After complete the task on the Autocode platform, we will additionally check your code.

How this task will be evaluated
We expect your solution to the task to meet the following criteria:

1. The test environment is set up; "coverage" npm script work properly (10 points).
2. validateAsync() function is implemented correctly and covered with tests (10 points).
3. validateWithThrow() function is implemented correctly and covered with tests (10 points).
4. validateWithLog() function is implemented correctly and covered with tests. The behavior of console.log() should be replaced using the knowledge of test doubles (10 points).
5. The test coverage for email-validator.js is 100%. Also, the test coverage report does not contain the test files (for example, emailValidator.test.js) (10 points).
6. At least three problems found by the audit check are handled and the scores for the categories of Performance, Accessibility, SEO, and Best Practices are higher than 90% (10 points).

If the solutions are not implemented, you may lose up to 60 points for this task. To pass the task, you need to get 70% of the points.

Don't forget to provide a screenshot with a code coverage report.
