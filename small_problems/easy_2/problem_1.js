// input: a string argument
// output: A new string that contains the value of the original string
// with all consecutive duplicate characters collapsed into a single character.
// algorithm: loop through the string. If save the first letter to a
// results string. If the second letter matches the first letter in the
// results string, skip and move to the next letter. If not add, to the
// results string and that letter becomes the letter to match. (save to
// a 'matching' string?) Return the result string when all letters have
// been looped through.

function crunch(string) {
  var results = '';
  var match = '';
  if (string.length >= 1) {
    var i;
    results = string[0];
    match = string[0];
    for (i = 1; i < string.length; i++) {
      if (string[i] === match) {
        continue      } else {
        results += string[i];
        match = string[i];
      }
    }
  }
  return results;
}

console.log(crunch('daaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
