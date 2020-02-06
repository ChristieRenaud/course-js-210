 // input:  an integer
 // output: the integer that is the next featured number after the integer. an
 // error is issued if there is no next featured number.
  // rules:
  // featured number must be:
  // - odd,
  // - multiple of 7
  // - all digits occur only once
  // the largest possible featured number is 9876543201
 // algorithm:
 // check if the number is a featured number, if so increment by 14.
 // if not check if the number is odd,
 //   - start with the number if it is odd, or 1 greater than the number.
 // increment the number by 2 until a featured number is found or the limit is reached.
 //  return the featured number or an error if none is found.
 // test for featured number:
 //   - is it evenly divisible by 7,
 //   - does each digit appear only once.
 //     - convert digits to an array of numbers.
 //     - create an object to keep track of how many times each letter appears,
 //     - if a letter appears 2 times, it is not a featured number.


 function isOdd(n) {
   return n % 2 === 1;
 }

 function isMultipleOf7(n) {
   return n % 7 === 0;
 }

 function uniqueDigits(n) {
   var counter = {};
   var digitArray = String(n).split('')
   var i;
   for (i = 0; i < digitArray.length; i++) {
     if (counter[digitArray[i]]) {
       return false;
     } else {
       counter[digitArray[i]] = true;
     };
   };
   return true;
 }


 function isFeaturedNumber(n) {
   return uniqueDigits(n) && isMultipleOf7(n)
 }


 function featured(n) {
   var startNumber = isOdd(n) ? n : n + 1;
   var i;
   for (i = startNumber; i <= 9876543201; i += 2) {
     if (isFeaturedNumber(i)) {
       return i;
     };
   }
   return "Error, no featured number found"
 }

// console.log(isFeaturedNumber(21));
// console.log(isFeaturedNumber(22));
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(98765432010));    // 1023456987
