// input: a string and a number times.
// output: returns the string repeated times number of times. Return undefinec
// if times is not a number or is a negative number. If times is 0 return an
// empty string.
// algorithm: determine if times is a positive integer. If not return undefined.
// Loop through times numbers of times, each time add string to a results string.
// return results string.

function repeat(string, times) {
  var i;
  var result;

  result = "";
  if (times < 0 || typeof(times) !== "number") {
    return undefined;
  } else {
    for (i = 1; i <= times; i++) {
      result += string;
    }
  }
  return result;

}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
