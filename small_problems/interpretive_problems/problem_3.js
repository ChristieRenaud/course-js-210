 // input: a string of text, including upper and lowercase letters and punctuation, and
 // an integer representing the key
 // output: a string representing the text decoded by shifting all letters key number
 // of characters. punctuation stays the same and case is conserved.
 // requirements: each character is checked, if it is alphabetic it is replaced with the character
 // the given number of characters to the right, alphabetically. If the key, plus the current character's
 // position is greater than the number of characters (26), then the shift transfers
 // back to the beginning of the alphabet. If the shifted position number must be less than or equal to
 // the position number of the highest character, or the number of characters (26) must be subtracted from the shifted
 // position number until it is. You must find a way to check if a letter is upper or lowercase and preserve the case.
// mental model:
 // determine if the character is alphabetic or not.
 // determine if character is uppercase or lowercase
 // shift the position and determine new character
 // replace old character with new character, keeping the case
// join all characters and return a string.

 // data type:
 // original string - converted to an array
 // conversion table -
 // an array of letters, a - z. 1 array, or 2, uppercase and lowercase
 // algorithm:
 // -split the string into a message array
 // -create an array of alphabetic characters to use for shifting the positions
 // -iterate through the message array and map to a new array
 //   - check if each character is alphabetic, if not return the character unchanged
 //   - if it is alphabetic, check if it is uppercase or lowercase.
 //   - for lower case:
 //      - transform by shifting over the key number
 //   - for uppercase:
 //     - transform to lowercase
 //     - transform by shifting over the key number
 //     - transform back to uppercase.
 //   - return the new character
 // - join the transformed array and return the string.
//
 // shifting the character:
 // add the key number to the index of the current character.
 // if the new number is less than or equal to the highest index, return the character
 //    at that index in the alphabet array
 // if the new number is greater than the highest index, subtract the array length until
 // it is less than or equal to the highest index, and return the character
 //    at that index

function caesarEncrypt(message, key) {
  var messageArray = message.split('');
  var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  messageArray = messageArray.map(function(char) {
    if ((/[^a-z]/i).test(char)) {
      return char;
    } else if ((/[a-z]/).test(char)) {
      return shiftCharacter(char, key, ALPHABET);
    } else {
      return shiftCharacter(char.toLowerCase(), key, ALPHABET).toUpperCase();
    }
  })
  return messageArray.join('');
}

function shiftCharacter(char, key, alphabetArray) {
  var charIndex = alphabetArray.indexOf(char);
  var shiftedCharIndex = (charIndex + key) % 26;
  // while (shiftedCharIndex >= alphabetArray.length) {
  //   shiftedCharIndex = shiftedCharIndex - alphabetArray.length;
  // }
  return alphabetArray[shiftedCharIndex];
}

// test cases

 // simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
