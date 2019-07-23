// input: A string
// output: A lowercase string
// algorithm: Initialize a result string. Find the character length to
// use as the limit. Loop through the string limit times, each time convert
// the string to its ASCII numeric representation, add 32 to that number,
// then convert back to a character. Check if the number is lowercase first
// by seeing if it's ASCII number is above 96. 0 - 9 are 48 - 57

function toLowerCase(string) {
  var i;
  var lowercaseString;

  lowercaseString = "";
  for (i = 0; i < string.length; i++) {
    var asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric > 64 && asciiNumeric < 91) {
      asciiNumeric += 32;
    }
    lowercaseString += String.fromCharCode(asciiNumeric);
  }
  return lowercaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
