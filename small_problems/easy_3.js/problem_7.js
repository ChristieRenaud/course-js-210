 // input: an array of numbers
 // output: a new array with each number the sum of the two previous numbers
 // in the first array
 // algorithm: create an empty array. Add the first element to the new array
 // Then loop through the first array starting with index 0 and add it and the
 // element at index 1 and push to the new array. Stop when is less than length - 1.
 // Return new array. Test for empty array.

function runningTotal(numberArray) {
  var totalArray = [];
  if (numberArray.length === 0) return totalArray;

  totalArray.push(numberArray[0]);
  var i;
  for (i = 0; i < numberArray.length - 1; i++) {
    totalArray.push(totalArray[i] + numberArray[i + 1]);
  }
  return totalArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
