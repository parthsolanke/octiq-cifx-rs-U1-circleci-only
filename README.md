# U1-circleci-only

The OSW-1178 message. An unsupported provider must be NAMED and must never be mistaken for 'no CI'.

## Purpose

This fixture repository exercises OSW-1178 message handling. When the detected CI provider is not one we support, the verdict must name the unsupported provider and must never be reported as 'no CI'.

## Crate layout

This is a minimal, dependency-free Rust library crate named `fixture`:

- `Cargo.toml` - package metadata; declares no external dependencies.
- `src/lib.rs` - library source exposing `add(a, b)` and `double(a)`, with unit tests under `#[cfg(test)]`.
- `tests/integration.rs` - integration tests that import `add` and `double` from outside the crate.
- `.circleci/config.yml` - CircleCI config, intentionally an unsupported provider for this fixture.

## Build and test

```sh
cargo build
cargo test
```

Four tests run (two unit tests in `src/lib.rs`, two integration tests in `tests/integration.rs`), so a successful run reports `4 passed`.

## Usage

Add the crate as a dependency and call its functions:

```rust
use fixture::{add, double};

assert_eq!(add(40, 2), 42);
assert_eq!(double(5), 10);
```

## How to test the message

1. Octiq QA -> Import -> GitHub -> this repo
2. In chat: `add a comment at the top of the README`
3. Read the two lines in the reply.

**Line 1 (the CI verdict - THIS IS THE TEST):**

    Tests not run - Currently, we support GitHub Actions, GitLab CI, Jenkins and Azure Pipelines. Found .circleci/config.yml, so tests were not checked.

**Line 2 (the build/test outcome):**

    Tests passed - 4 passed        (or a real failure, never "no recipe")
