//input: two arrays
// output: returns true if the arrays contain the same values, false if they do not.
// algorithm: loop through both arrays and compare the values at each index. If they
// are not equal return false.

function arraysEqual(array1, array2) {
  var i;
  var limit = array1.length >= array2.length ? array1.length : array2.length;
  for (i = 0; i < limit; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}


console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
