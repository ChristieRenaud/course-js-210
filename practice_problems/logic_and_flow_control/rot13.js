// input: A string
// output: A string where all alphabetic characters have been replaced
// with the character 13 spaces later in the alphabet.
// rules: Letter transformations preserve case.
//        Don't modify characters that are not letters.


function rot13(string) {
  var TRANSFORMATION_VALUE = 13;
  var UPPERCASE_A = 65;
  var UPPERCASE_Z = 90;
  var LOWERCASE_A = 97;
  var LOWERCASE_Z = 122;
  var newString;
  var i;

  newString = ""
  for (i = 0; i < string.length; i++) {
    if (!(string[i] >= 'a' && string[i] <= 'z')
          && !(string[i] >= 'A' && string[i] <= 'Z')) {
      newString += string[i];
      continue;
    }
    var asciiNumeric = string.charCodeAt(i) + TRANSFORMATION_VALUE;
    if (string[i] >= 'A' && string[i] <= 'Z') {
      if (asciiNumeric > UPPERCASE_Z) {
        asciiNumeric = asciiNumeric - UPPERCASE_Z + UPPERCASE_A - 1;
      }
    } else {
      if (asciiNumeric > LOWERCASE_Z) {
        asciiNumeric = asciiNumeric - LOWERCASE_Z + LOWERCASE_A - 1;
      }
    }
    newString += String.fromCharCode(asciiNumeric);
  }
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
//Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
//Teachers open the door, but you must enter by yourself.
