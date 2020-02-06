 // input: a number to rotate, and a number indicating which digit, counting from
 // the end to be removed and added to the end
 // output: a new number with indicated digit removed from number and added to the end
 // algorithm:
 // convert the number to a string
 // split the string into the part to remain unchanged and part to be rotated
 // rotate the second part
 // join the first part to the rotated part
 // convert the string to a number and return
 function rotateRightmostDigits(originalNumber, digitsToRotate) {
   var numberString = originalNumber.toString();
   var rotationStartingIndex = numberString.length - digitsToRotate;
   var firstPart = numberString.slice(0, rotationStartingIndex);
   var secondPart = numberString.slice(rotationStartingIndex)
   var rotatedPart = secondPart.slice(1).concat(secondPart[0])
   return parseInt(firstPart.concat(rotatedPart), 10);

 }


// examples:
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
