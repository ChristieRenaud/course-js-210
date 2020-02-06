 // input: string
 // output: return a new string with each character doubled
 // algorithm: loop through the string. push 2 of each characters to a new string
 // and return the new string.

 function repeater(string) {
   var repeatedString = '';
   var i;
   for (i = 0; i < string.length; i++) {
     repeatedString += string[i] += string[i];
   }
   return repeatedString;
 }

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
