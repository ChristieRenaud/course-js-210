// input: first argument: a string of 1 or more letters. second argument: a
// alphabetic string of 1 or more characters.
// output: the index of the first (or last) instance of a substring that matches
// the second argument.
// algorithm: check each letter of the string with the first letter of
// the substring. if it matches and the substring is one character long
// return the index of the character in the string. If the substring
// has more than one character, check the next character to see if set
// if it matches, keep going until you have checked the whole string
// or failed to find a match. If the whole substring matches,return the
// index of the first letter to match.

function indexOf(firstString, secondString) {
  var m = firstString.length;
  var n = secondString.length;
  var i; //
  var j; //
  var counter = 0;
  for (i = 0; i <= m - n; i++) {
    if (firstString[i] !== secondString[i] && i === (m - n)) {
      return -1;
    } else if (firstString[i] !== secondString[i]) {
      continue;
    } else if (n === 1) {
      return i;
    }
    var k = 1;
    for (j = i + 1; k <= n; j++) {
      if (firstString[j] !== secondString[k]) {
        break;
      }
      else {
        counter += 1;
        k++;
      }
    }
    if (counter === n) {
      return i;
    }
  }
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
//lastIndexOf('Blue Whale, Killer Whale', 'all');
function indexOf(firstString, secondString) {
  var m = firstString.length;
  var n = secondString.length;
  var i;
  for (i = 0; i < (m - n); i += 1) {
    if (firstString[i] === secondString[i]) {
      return i;
    }
  }
}

indexOf('Some strings', 's');
