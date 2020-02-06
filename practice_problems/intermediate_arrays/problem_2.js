// input: 2 arrays;
// output: a new array, even positions come from the first array, odd positions
// from 2nd array.
// algorithm: create new array. loop through, if the index is even,push the element with
// index at the same position from the first array, if the index is odd, push
// the element with index at that position from 2nd array.

function combinedArray(even, odd) {
  var combined = [];
  var i;
  for (i = 0; i < even.length; i += 1) {

      combined.push(even[i], odd[i]);

  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]
