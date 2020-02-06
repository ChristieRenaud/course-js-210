// input: an array of numbers
// output: an array that includes all the missing integers in order between the
// first and last elements of the argument.
// algorithm: start with the first element using the last element as the limit.
// compare each element with the array, if it exists there, skip it, if not
// push to new array. return the new array.

function missing(arr) {
  var missingArray = [];
  var i;
  for (i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) {
      missingArray.push(i)
    }
  }
  return missingArray;
}
console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
