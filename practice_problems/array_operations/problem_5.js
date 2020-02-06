// input: an array and a value
// output: first index at which the value can be found or -1 if the value
// is not present.
// algorithm: loop through the array, when a value matches the argument value,
// return that value

function indexOf(array, value) {
  var index = -1;
  var i;
  for (i = 0; i < array.length; i++) {
    if (value === array[i]) {
      index = i;
      break;
    }
  }

  return index;

}


console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
