// input: a string
// output: that string with every lowercase letter changed to uppercase and
// every uppercase letter changed to lowercase. Leave other chars unchanged.
// algorithm: Split into chars, check if the character is uppercase or lowercase or
// neither and transform it. Join together and return.

function swapCase(string) {
  return string.split('').map(function (character) {
    if (/[a-z]/.test(character)) {
      return character.toUpperCase();
    } else if (/[A-Z]/.test(character)) {
      return character.toLowerCase();
    } else {
      return character;
    };
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
