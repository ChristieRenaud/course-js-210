 // input:
 // output:
 // algorithm:


 function wordSizes(string) {

   var stringArray = removeNonLetters(string).split(' ');

   var wordSizeObject = {};
   var i;
   for (i = 0; i < stringArray.length; i++) {
     if (stringArray[i].length === 0) {
       continue
     }
     if (!wordSizeObject[stringArray[i].length]) {
       wordSizeObject[stringArray[i].length] = 1;
     } else {
       wordSizeObject[stringArray[i].length] += 1;
     }
   }
   return wordSizeObject;
 }

 function removeNonLetters(string) {
   var i;
   var cleanedUpString = '';
   for (i = 0; i < string.length; i++)
    if (string[i].match(/[a-z\s]/i)) {
      cleanedUpString += string[i];
    }
   return cleanedUpString;
 }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));
