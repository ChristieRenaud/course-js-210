 // input: number
// output: true or false
 // algorithm: convert to a string, then return the result of calling isPalindrome
 // on string



function isPalindrome(string) {
  var reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));

}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
