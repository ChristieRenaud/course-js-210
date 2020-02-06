// input: an Array, a start index, and an end index
// output: a new array that contains values from the original, starting with
// the start index, and including all values up to but NOT including the end
// index.
// algorithm: create a results array. loop through the original array, start iterating
// at the start index, stop when the index is less than the end index. add all
// array values to the new array. Return the new array.

function slice(array, startIndex, endIndex) {
  var newArray = [];
  var i;
  for (i = startIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}


console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
