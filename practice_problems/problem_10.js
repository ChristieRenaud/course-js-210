// input: a string
// output: an integer representing the ASCII string value of the strings
// definition: The ASCII string value is the sum of the ASCII values of each
// character in the string.
// algorithm: Loop through each letter in the string using the strings indexes.
// computer the value of each letter and add to the sum. Return the sum. An empty
// string has a value of zero.

function asciiValue(string) {
  var sum = 0;
  var index;
  for (index = 0; index < string.length; index++) {
    sum += string.charCodeAt(index);
  }
  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
