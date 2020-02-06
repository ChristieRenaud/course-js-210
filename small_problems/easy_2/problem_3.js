// input: a number
// output: a string of alternating 1's and 0's with the given number of characters in it.
// starting with 1.

// algorithm: create a result string and an index starting at 1. iterate through
// adding a 1 if the index is odd and a 0 if the index is even. Add one to
// the index at the end of each iteration. Stop when the index is greater than the
// number.

function stringy(size) {
  var i;
  var result = '';
  for (i = 1; i <= size; i++) {
    result += String(i % 2);
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(0));    // ""
