 // input:  a string
 // output:  an object with 3 properties, number of lowercase letters, number of uppercase
 // letters and number of chars that are neither.
 // algorithm: Create an object. split and loop through the string, test if a character is lowercase
 // then increment that property, uppercase, increment that property, or if neither increment
 // that property. Return the object

function letterCaseCount(string) {
  var letterCaseCountObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }
  string.split('').forEach(function (char) {
    if (/[a-z]/.test(char)) {
      letterCaseCountObject.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      letterCaseCountObject.uppercase += 1;
    } else {
      letterCaseCountObject.neither += 1;
    }
  });
  return letterCaseCountObject;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
