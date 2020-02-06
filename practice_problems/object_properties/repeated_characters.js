// input: a string
// output: an object that contains a count of the repeated characters.
// rules: uses the letters as keys. Only returns the counts of letters with
// more than one characters. Ignores the case.

// algorithm: set to lower case. split into an array. Loop through and delete all characters that
// have only one occurrence - check if indexOf and lastIndex of are the same.
// loop through new array and build an object with letters as keys, incrementing
// the count. Return the object.

function repeatedCharacters(string) {
  string = string.toLowerCase()
  var resultString = '';
  var characterCount = {};
  var i;
  for (i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      resultString += string[i];
    }
  }
  var j;
  for (j = 0; j < resultString.length; j++) {
    if (!characterCount[resultString[j]]) {
      characterCount[resultString[j]] = 0;
    }
    characterCount[resultString[j]] += 1;
  }
  return characterCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
