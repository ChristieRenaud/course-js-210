 // input: a string
 // output: an array containing a list of all substrings of a string that are
  // palindromic
 // algorithm: write a function to determine if a substring is a palindrome of
 // another string.Create a list of all possible substrings from the original string.
 // Filter that list by selecting only those that are palindromes by determining
 // if they return true for the isPalindrome function.

 function palindromes(string) {
   return substrings(string).filter(isPalindrome);
 }

function isPalindrome(string) {
  return string === (reverseString(string)) && string.length > 1;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}
 function substrings(string) {
   return string.split('').map(function (letter, idx) {
     return string.slice(idx)
   }).flatMap(substringsAtStart)
 }

 function substringsAtStart(string) {
   return string.split('').map(function(letter, index) {
     return string.slice(0, index+1);
   })
 }

 console.log(palindromes('abcd'));       // []
 console.log(palindromes('madam'));      // [ "madam", "ada" ]

 console.log(palindromes('hello-madam-did-madam-goodbye'));
 // returns
 // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
 //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
 //   "-madam-", "madam", "ada", "oo" ]
 //
console.log(palindromes('knitting cassettes'));
 // // returns
 // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
