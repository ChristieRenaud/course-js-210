 // input: a string of one or more space separated words
 // output:  an object that show the number of words of different sizes. word-size
 // is the key, number of words of that size is the value.
 // algorithm: separate the string into an array of strings. loop through the array
 // and count the length of the words. create an object. if the object has a key
 // that is the string length converted to a string, increment it. If not, create the key
 // and set it to 1. Return the object
function wordSizes(string) {
  if (string.length === 0) return {};
  var stringArray = string.split(' ');
  var wordSizeObject = {};
  var i;
  for (i = 0; i < stringArray.length; i++) {
    if (!wordSizeObject[stringArray[i].length]) {
      wordSizeObject[stringArray[i].length] = 1;
    } else {
      wordSizeObject[stringArray[i].length] += 1;
    }
  }
  return wordSizeObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
