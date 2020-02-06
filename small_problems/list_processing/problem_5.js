 // input: a string
 // output:  an array with all substrings that start from the beginning of the string
 // algorithm: split into an array. map a slice of the string that starts at 0
 // and contains index+1 characters.

function substringsAtStart(string) {
  return string.split('').map(function(letter, index) {
    return string.slice(0, index+1);
  })
}



console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
