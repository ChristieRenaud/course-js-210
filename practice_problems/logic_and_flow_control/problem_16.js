// input: a string to be split, a delimiter
// output: logs each substring separately. Returns an error if there is no
// delimiter. The delimiter is not part of any substring. If the delimiter
// is an empty string the string is split into individual characters.
// If a string starts with a delimiter an empty string is logged and then the
// next substring (area after the delimiter until the next delimiter)

// algorithm: Log an error if there is no delimiter. Initialize an empty string.
// find the length of the string to serve as a limit. Loop through the
// string by index starting at 0 and stopping when the index is less than
// the limit.
// if the character is equal to the delimiter log the result string and
// set it equal to an empty string. If the character is not a delimiter save
// to the result string.
// If the delimiter is a blank string, log each character separately.

function splitString(string, delimiter) {
  var limit = string.length
  var temp = ""
  var i
  if (delimiter === undefined) {
      console.log('ERROR: No delimiter');
  }
  if (delimiter === "") {
    for (i = 0; i < limit; i++) {
      console.log(string[i]);
    }
  } else {
    for (i = 0; i < limit; i++) {
      if (string[i] === delimiter) {
        console.log(temp);
        temp = "";
      } else {
        temp += string[i]
      }
    }
    if (temp !== "") {
      console.log(temp);
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
