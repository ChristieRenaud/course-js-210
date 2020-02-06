 // input:  a string
 // output:  a new string with only consonants doubled
 // algorithm: loop through string, test if its a consonant. If it is add to string
 // twice. if not add to string once.

function doubleConsonants(string) {
  var doubledString = '';
  var i;
  for (i = 0; i < string.length; i++) {
    doubledString += string[i]
    if (string[i].match(/[b-df-hj-np-tv-z]/i)) {
      doubledString += string[i];
    }
  }
  return doubledString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
