// input: a string, a numerical start index, and a numerical length.
// output: a string that is a substring of the original string.
// rules: If the starting index is negative, subtract from (or add the negative)
// value to the string length.
// If the length is longer than the available characters, just end
// the substring when there are no characters left in the string.
// Zero or negative lengths return an empty string.

// algorithm: initialize a results string. Convert the start index
// to a positive if its not already. Loop through the string starting
// at the start index, adding each character to the result string.
// stop looping when the index reaches the string length.
// return the results string.

function substr(string, start, length) {
  var i;
  var substring;
  var limit;
  var strLength;

  strLength = string.length
  if (start < 0) {
    start = strLength + start;
  }

  if (strLength < start + length) {
    limit = strLength;
  } else {
    limit = start + length;
  }
  substring = "";
  for (i = start; i < limit; i++) {
    substring += string[i];
  }
  return substring;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
