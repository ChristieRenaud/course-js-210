 // input: string argument
 // output:  a new string with the words from the first string in reversed order
 // algorithm: split string into an array. reverse the array, join back together
 // with spaces

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}


console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
