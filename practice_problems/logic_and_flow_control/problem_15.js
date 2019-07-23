// input: a string
// output: a copy of the original string with leading and trailing spaces
// removed.
// algorithm: loop through the string and access each character using its index
// if the character is a space move on to the next character. When you reach a
// character add it to a results string and add each of the next characters
// to the results string. Do the same thing starting from the end of the string.
// Stop and return the results string if the first character is not a space.
// if it is a space repeat first loop from end to beginning. Then loop through
// again to reverse the order of the results string.

function trim(string) {
  var results = "";
  var results2 = "";
  var limit = string.length;
  var i;
  var j;
  var k;
  var l;

  for (i = 0; i < limit; i++) {
    if (string[i] === " ") {
      continue;
    } else {
        for (k = i; k < limit; k++) {
        results += string[k];
      }

      if (results[results.length-1] !== " ") {
        return results;
      }
      else
        for (j = results.length-1; j >= 0; j--) {
          if (results[j] === " ") {
            continue;
          }
          else {
            for (l = j; l >= 0; l--) {
            results2 = results[l] + results2;
            }
          return results2;
        }
      }
    }
    return results;
  }




trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
