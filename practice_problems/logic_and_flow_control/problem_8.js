// input: 2 values
// Output: true if exactly one is true, false otherwise
// algorithm: Convert values to Booleans. Check if the first is true and second false (!true), return true
// Check if first is false and second is true.

function isXor(value1, value2) {
  value1 = Boolean(value1);
  value2 = Boolean(value2);

  if ((value1 && !value2) || (!value1 && !value2)) {
    return true;
  } else {
    return false;
  }
}

isXor(false, true);
