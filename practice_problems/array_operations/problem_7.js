// input: an array a start index, the number of values to remove
// output: remove number of values from the original array starting with the
// first index. Return the removed values in a new Array.
// algorithm: loop through array. starting with the start index,while the index
// is less than the start index + number of values. push the element to the
// new array and shift the elements down in the array by array[i] = array[i+1].

function splice(array, begin, numberOfValues) {
  newArray = [];
  var i;
  for (i = begin; i < array.length; i++) {
    if (i < begin + numberOfValues) {
      newArray.push(array[i]);
    }
    array[i] = array[i+numberOfValues];
  }
  array.length = array.length - newArray.length;
  return newArray;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
