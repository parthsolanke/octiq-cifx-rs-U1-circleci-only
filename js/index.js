// Plain JavaScript mirror of the Rust `fixture` crate (src/lib.rs).

function add(a, b) {
  return a + b;
}

function double(a) {
  return a * 2;
}

module.exports = { add, double };
