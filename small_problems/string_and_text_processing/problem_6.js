 // input:  a string
 // output: a string with every other letter capitalized followed by a lowercase
 // or non-alphabetic character.non-alpha not changed
 // algorithm: split into an array. transform each character by capitalizing
 // ones with an even index and downcasing those with an odd index. join

function staggeredCase(string) {
  return string.split('').map(function (character, index) {
    return index % 2 === 0 ? character.toUpperCase() : character.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
