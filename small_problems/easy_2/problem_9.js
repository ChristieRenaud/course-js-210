// input: a string with some words and some nonalphabetic characters.
// output: a new string with all nonalphabetic characters replaced by spaces
// and remove extra spaces.
// algorithm: loop through the string by index. Check if the character is alpha
// nonalpha using regex and replace nonalpha with a space. go through again and remove
// extra spaces by checking if a character is a space, if it has a space before
// don't save to result string.

function cleanUp(string) {
  var i;
  var result = "";

  for (i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/i)) {
      result += string[i];
    } else if (i === 0 || string[i-1].match(/[a-z]/i)) {
      result += ' ';
    }
  }

  return result;
}

console.log(cleanUp("---what's My +*& line?"));    // " what s my line "
