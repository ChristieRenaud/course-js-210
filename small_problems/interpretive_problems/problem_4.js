 // input: a plaintext string consisting of letters and other characters, and a
  // key made up of a word, each letter translates to a number to shift characters
 // output:  a string encoded by the cypher. nonalpha characters are ignored and the
 // cypher does not move forward.
 // requirements:
 // each letter in the plaintext is encoded sequentially based on a letter in the key
 // each letter in the key is equivalent to a numerical shift based on the alphabet.
 // Each letter in the key shifts a corresponding letter in the plaintext, the key
 // repeats itself until the whole message has been encrypted.
 // The letters in the key are not case sensitive, uppercase and lowercase both have
 // the same value.
 // Non alpha characters in the plaintext are not encrypted but left as is. The key does not
 // advance forward on non alpha characters.
 // Each alpha character is shifted using a cypher encryption, case is maintained.

 // algorithm:
 // - create a results string
 // - transform the key into an array of numbers based on the letter each character is
 //   equivalent to in the alphabet.
 // - split the plaintext into an array so you can use forEach method
 // - start with index 0 to keep track of which letter of cypher you're on. To increment,  index === (index + 1) % key.length
 // - Loop through the plaintext.
 //    -If the char is a letter, encrypt with cyper, then add to the results string. increment index
 //    - if not a char add to the results string as is. Do not increment.
 // - return the results string.

var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function  vigenereEncrypt(plaintext, key) {
  var encryptedString = '';
  var keyArray = key.toLowerCase().split('').map(function(char) {
    return ALPHABET.indexOf(char);
  });

  var index = 0;
  plaintext.split('').forEach(function (char) {
    if ((/[a-z]/i).test(char)) {
      char = caesarEncrypt(char, keyArray[index]);
      index = (index + 1) % key.length;
    }
    encryptedString += char;
  });
  return encryptedString;
}

function caesarEncrypt(message, key) {
  var messageArray = message.split('');
  messageArray = messageArray.map(function(char) {
    if ((/[^a-z]/i).test(char)) {
      return char;
    } else if ((/[a-z]/).test(char)) {
      return shiftCharacter(char, key, ALPHABET);
    } else {
      return shiftCharacter(char.toLowerCase(), key, ALPHABET).toUpperCase();
    };
  });
  return messageArray.join('');
}

function shiftCharacter(char, key, alphabetArray) {
  var charIndex = alphabetArray.indexOf(char);
  var shiftedCharIndex = (charIndex + key) % 26;
  return alphabetArray[shiftedCharIndex];
}

// test cases:

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereEncrypt('ABCDe fg?', 'car'));
// CBTFe wi?
console.log(vigenereEncrypt('ABCDe fg?', 'CAr'));
