// input: 2 strings,
// output: true or false, depending on whether the first string starts with the
// second string.
// algorithm: test if length of first string is longer or equal to the
// second string. If not return false. Loop through as many times as
// the length of the second string. Check the character at the same
// index in both strings. If they are the same keep going. If not the same
// return false. Return true at the end if the loop has not terminated and
// returned true. Or save each to a results string and return true if
// the results and first string are the same length.

function startsWith(string, searchString) {
  var limit;
  var i;
  limit = searchString.length;

  for (i = 0; i < limit; i++ ) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
