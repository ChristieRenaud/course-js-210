// input: an array
// output: a string with all the elements of the array concatenated

function combine(arr) {
  var result = '';
  var i;
  for (i = 0; i < arr.length; i++) {
    result += String(arr[i]);
  }
  return result;
}

console.log(combine([1, 'a', 4]));
