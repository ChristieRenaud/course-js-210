// input: array and an element
// output: the last index at which the element can be found,or -1 if it isn't found
// algorithm: loop through the array from the last element to the first. it there
// is a match, return the index, if not return -1.

function lastIndexOf(array, value) {
  var i;

  for (i = array.length - 1; i >= 0; i--) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}



console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
