 // input: a string
 // output: true or false depending on whether the word is a palindrome
 // algorithm: reverse the string and see if the strings are equal.

function isPalindrome(string) {
  var reverseString = string.split('').reverse().join('');
  return string === reverseString;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
