 // input: string
 // output:  true if all alphabetic characters are uppercase, false otherwise
 // algorithm: remove nonalphabetic characters. Use an ALL function and test
 // if all characters are uppercase by checking if the character is equal to
 // its uppercase version.

 function isUppercase(string) {
   stringArray = string.replace(/[^a-z]/ig, '').split('');
   return stringArray.every(function (letter) {
     return letter.match(/[A-Z]/);
   });
 }


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
