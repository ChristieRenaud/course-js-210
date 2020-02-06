 // input: sentence string
 // output:  returns the original string with each occurrence of a number word
 // converted to its corresponding character and substituted for it.
 // algorithm:
 // split the sentence into an array.
 // Create an array of number words that corresponds to their indexes
 // Map the sentence array and check if each word is included in the array by
  // by checking if its index appears in the array. If it does, return the index,
// if not return the word. Join the array and return.

NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
function wordToDigit(sentence) {
  return sentence.split(" ").map( function (word) {
    cleanedUpWord = word.replace(/[^a-z]/ig, '')
    if (NUMBERS.indexOf(cleanedUpWord) >= 0) {
      return word.replace(/[a-z]+/i, NUMBERS.indexOf(cleanedUpWord));
    } else {
      return word;
    };
  }).join(' ');
}


 // Examples:
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));
