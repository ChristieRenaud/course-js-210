// input: an Array;
// output: remove the beginning of the array and return it
// algorithm: save the first element to a variable. Loop through, shifting the elements
// down a position. Change the array length to one less than the original array length;
// return the first element variable.

function shift(array) {
  var firstValue = array[0];
  var i;

  if (array.length === 0) {
    return undefined;
  }

  for (i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return firstValue;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
