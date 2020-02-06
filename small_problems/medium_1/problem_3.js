 // input: an integer
 // output: an integer representing the maximum rotation of the first integer.
// rules:
// rotate the first digit, the integer.length digit from the right
// take that number and rotate the integer.length - 1 digit from the right
// take that number and rotate the integer.length - 2 digit from the right.
// repeat until you have rotated the 2nd digit from the right.
 // algorithm:
 // convert number to a string.
 // loop starting at index integer.length - 1 and end when integer reaches 1.
 // for each iteration, rotate the index digit of the integer. save the result as the
 // integer to rotate.
 // covert the result to an integer and return.

 function maxRotation(number) {
   var numberString = number.toString();
   var i;
   for (i = numberString.length; i >= 2; i -= 1) {
     numberString = rotateRightmostDigits(numberString, i);
   }
   return numberString;
 }

 function rotateRightmostDigits(originalNumber, digitsToRotate) {
   var numberString = originalNumber.toString();
   var rotationStartingIndex = numberString.length - digitsToRotate;
   var firstPart = numberString.slice(0, rotationStartingIndex);
   var secondPart = numberString.slice(rotationStartingIndex)
   var rotatedPart = secondPart.slice(1).concat(secondPart[0])
   return parseInt(firstPart.concat(rotatedPart), 10);

 }


// Examples
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
