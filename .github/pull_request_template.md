---
name: solution code review
about: A template PR for code review, complete with checklist
title: 'Code Review: challenge name, strategy name'
---

<!--
  make this PR easy to find:

  - assign: yourself
  - labels: challenge-name, strategy-name
  - request a review
-->

<!-- describe your PR -->

# Description

<!-- A clear and concise description of what the Pull Request is about. -->

Before the reviewer merges this PR to main/master, all of these boxes must be
checked. Only the reviewer can check boxes.

## Behavior

> What the function does - inputs and outputs

- **The Function**
  - [ ] The function's name is clear and helpful
  - [ ] The parameter names are clear and helpful
  - [ ] Default parameters are used if possible
- **JSDoc Comment**
  - [ ] The docstring is well-formatted
  - [ ] There are no spelling mistakes
  - [ ] The description of the function's behavior is clear
  - [ ] All parameters are documented with types
  - [ ] Documented parameter names match the function's parameter names
  - [ ] Parameters have a good description
  - [ ] If default parameters are used, they are the correct type
  - [ ] The return value is documented with a type
  - [ ] The return value has a clear description
- **README**
  - [ ] All the sections in the solution README are complete
  - [ ] Descriptions in the README are thorough and clear
  - [ ] There is at least 2 use-cases
- **Unit Tests**
  - [ ] Unit tests are present
  - [ ] There are at least 20 test cases
  - [ ] All `describe`s and `it`s have clear and helpful names
  - [ ] All test names actually describe what is being tested
  - [ ] Tests are grouped logically using `describe`
  - [ ] There is only one `expect` inside every `it`
  - [ ] There is no logic (loops, conditionals, ...) in the test cases
  - [ ] Side-effects are tested, if necessary
  - [ ] All tests pass in the CI check
  - [ ] The tests have 100% coverage of the solution
  - [ ] Tricky edge cases are tested (extra credit)

## Strategy

> The logic behind the solution

- **The Function**
  - [ ] Variables have names that help understand the strategy
  - [ ] Spacing and formatting help to understand the strategy
  - [ ] The code is written as simply and clearly as possible
  - [ ] Use short, clear comments to describe the strategy
- **README**
  - [ ] There is an explanation of the solution's strategy in the README
  - [ ] The explanation is clear and understandable
  - [ ] The explanation actually matches the function that was written

## Implementation

> The code used to write the solution

- **Formatting**
  - [ ] No formatting errors appear in the linting check
- **Linting**
  - [ ] There should be no linting errors or warnings in the CI check
  - [ ] Spelling should be correct in all code, comments and docstrings
- **The solution file**
  - [ ] Has a JSDoc comment
  - [ ] Has an exported function
  - [ ] Does no other code or comments outside of the function body (you can use
        `sandbox.js` for saving extra ideas)
- **The function body _Should_ ...**
  - [ ] Be well and consistently formatted
  - [ ] Have clear and helpful variable names
  - [ ] Declare variables in the smallest scope possible
  - [ ] Be a simple and readable implementation
- **The function body should _Not_ ...**
  - [ ] Have extra comments that are not about the solution's strategy
  - [ ] Have any user interactions (`prompt`, `alert`, `confirm`)
  - [ ] Have any `console` calls (`.log`, `.assert`, ...)
  - [ ] Have any `debugger` statements
