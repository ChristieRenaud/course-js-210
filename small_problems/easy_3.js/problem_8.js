 // input:  a string
 // output:  a new string with each word has the first and last letters swapped
 // algorithm: separate into an array of strings. loop through and swap first and
 // last letters. Join array together an return.

 function swap(string) {
   var stringArray = string.split(' ');
   var resultArray = [];
   var i;
   resultArray = stringArray.map(swapWord)
   return resultArray.join(' ');
 }

 function swapWord(word) {
   if (word.length === 1) return word;
   var swappedWord = ''
   var i;
   var length = word.length;
   swappedWord += word[length-1];
   for (i = 1; i < length - 1; i++) {
     swappedWord += word[i];
   }
   return swappedWord += word[0];
 }

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
