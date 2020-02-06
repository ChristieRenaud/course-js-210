// input: array
// output: new array with results in reversed order.
// algorithm: iterate from array starting with the last element, use
// the array length - 1 for the starting index and subtract one from it
// each iteration until i is less than 1

function reverseArray(arr) {
  var results = [];
  var i;
  var j = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    results[j] = arr[i];
    j++;
  }
  return results;
}

var letters = ['a', 'b', 'c', 'd', 'e'];
console.log(reverseArray(letters));
