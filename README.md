# octiq-cifx-rs-U1-circleci-only

A small, dependency-free Rust library (`fixture`) whose build and tests run on CircleCI.

- Library source: `src/lib.rs` (exports `add` and `double`, with inline unit tests).
- Integration tests: `tests/integration.rs` (exercise the public API from outside the crate).
- CI configuration: `.circleci/config.yml` (CircleCI 2.1 pipeline).

## Requirements

- Rust toolchain (edition 2021, tested on `cimg/rust:1.77`).
- No external dependencies.

## Build

```
cargo build
```

## Test

```
cargo test
```

This runs both the inline unit tests in `src/lib.rs` and the integration tests in `tests/integration.rs`.

## CircleCI pipeline

The pipeline is defined in `.circleci/config.yml`. It has a single `test` job that:

1. Checks out the repository.
2. Runs `cargo test`.

The `main` workflow runs the `test` job on every push.

To connect the project to CircleCI, link the repository from the CircleCI dashboard; the pipeline then runs automatically on each push. To run it locally, use the CircleCI CLI:

```
circleci local execute --job test
```
