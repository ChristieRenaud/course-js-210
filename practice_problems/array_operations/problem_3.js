//input: 2 args, an array and a value.
// output: Insert the value at the beginnning of the array, and return
// the new length of the array.
// algorithm: create a  new array with the value added to it. loop through
// the array and add each value to the new array, starting at index 1.
// assign the new array  to the old array. return the length of the new array

function unshift(array, value) {
  var newArray = [value];
  var i;
  for (i = 0; i < array.length; i++) {
    newArray[i+1] = array[i];
  }

  for (i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }

  return array.length;
}


var count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
