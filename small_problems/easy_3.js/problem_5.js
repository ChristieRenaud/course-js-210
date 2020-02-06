 // input: a string
 // output:  true or false depending on whether or not string is a palindrome.
 // algorithm: turn string into a downcase string. Remove nonalphanumeric chars
 // using regex. Call isPalindrome on the cleanedUp string.

 function isPalindrome(string) {
   var reverseString = string.split('').reverse().join('');
   return string === reverseString;
 }

 function isRealPalindrome(string) {
   var cleanedUpString = '';
   var lowerCaseString = string.toLowerCase();
   var i;
   for (i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i].match(/[a-z0-9]/i)) {
       cleanedUpString += lowerCaseString[i]
      }
    };

    return isPalindrome(cleanedUpString);
 }

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
