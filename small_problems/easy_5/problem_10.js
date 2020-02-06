 // input:  a string containing one or more words
 // output:  a new string containing the words from the string with five or more
 // letter words reversed.
 // algorithm: split into an array. Loop through the array, for words less than 5
 // letters push to an array. For words with 5 or more letters,split into an array,split
 // reverse and join and add to the array. Join the whole array and return.

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(reverseWord('something'))

function reverseWords(string) {
  var stringArray = string.split(' ');
  var results = [];
  var i;
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length < 5) {
      results.push(stringArray[i]);
    } else {
      results.push(reverseWord(stringArray[i]))
    }
  }
  return results.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
