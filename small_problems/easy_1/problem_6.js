// input: 2 strings of differing length;
// output: returns a new string consisting of the shorter string + the longer
// string + the shorter string
// algorithm: determine which string's length is longer. Concatenate the strings
// into a new string with short + long + short pattern and return.

function shortLongShort(firstString, secondString) {
  var short;
  var long;

  if (firstString.length < secondString.length) {
    short = firstString;
    long = secondString;
  } else {
    short = secondString;
    long = firstString;
  }

  return short + long + short;
}

// alternate solution
function shortLongShort(firstString, secondString) {
  if (firstString.length < secondString.length) {
    return firstString + secondString + firstString;
  } else {
    return secondString + firstString + secondString;
  }
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
