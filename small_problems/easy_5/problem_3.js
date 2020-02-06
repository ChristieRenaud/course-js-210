 // input: a positive integer
 // output: an integer that represents that number with digits reversed
 // algorithm: convert number to a string and then an array. reverse the array,
 // convert back to a string and then to an integer.

function reverseNumber(number) {
  var numberString = String(number);
  numberString = numberString.split('').reverse().join('');
  return parseInt(numberString, 10);
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
