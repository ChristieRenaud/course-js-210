// input: an array and a string
// output: a string with the string representation of each array element joined
// together with the second argument as a separator.
// algorithm: create a result string. loop through the array. Use the string
// function to coerce each value to a string. add to the result string. If the
// array index is less than the array.length - 1 add the separator to the result string
// return the result string.

function join(array, separator) {
  var results = '';
  var i;
  for (i = 0; i < array.length; i++) {
    results += String(array[i]);
    if (i < array.length - 1) {
      results += separator;
    }
  }
  return results;
}


console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
