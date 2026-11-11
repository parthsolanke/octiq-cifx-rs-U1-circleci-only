<!-- U1-circleci-only -->

# U1-circleci-only

The OSW-1178 message. An unsupported provider must be NAMED and must never be mistaken for 'no CI'.

## How to test

1. Octiq QA -> Import -> GitHub -> this repo
2. In chat: `add a comment at the top of the README`
3. Read the two lines in the reply.

**Line 1 (the CI verdict - THIS IS THE TEST):**

    Tests not run - Currently, we support GitHub Actions, GitLab CI, Jenkins and Azure Pipelines. Found .circleci/config.yml, so tests were not checked.

**Line 2 (the build/test outcome):**

    Tests passed - 4 passed        (or a real failure, never "no recipe")
