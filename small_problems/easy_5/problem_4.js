 // input:  a string
 // output:  a string with the letter or letters in the middle of the string
 // algorithm: if the string is even return the middle 2 characters, index n/2 and
 // n/2 -1. If the character is odd return character at index n/2 rounded up.

 function centerOf(string) {
   var length = string.length;
   var halfLength = length/2;
   if (length % 2 === 0) {
     return string.slice(halfLength - 1, halfLength + 1);
   } else {
     return string[Math.floor(halfLength)];
   }
 }



console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
