 // input:  a string
 // output:  an array of all the substrings of a string. Order by where in the string
 // the substring occurs, and then shortest substring to longest
 // algorithm: split into an array. loop through and map to an array of strings
 // each starting at the index and moving to the end. Then loop through that array and
 // map to an array of strings containing all the substrings that start with the first letter.

function substrings(string) {
  return string.split('').map(function (letter, idx) {
    return string.slice(idx)
  }).flatMap(substringsAtStart)
}


function substringsAtStart(string) {
  return string.split('').map(function(letter, index) {
    return string.slice(0, index+1);
  })
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
