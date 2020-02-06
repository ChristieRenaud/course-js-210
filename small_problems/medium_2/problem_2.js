 // input: three numbers representing the sides of a triangle
 // output: one of four strings representing the triangle's classification
 // rules:
 // equilateral: all 3 sides equival
 // isosceles: 2 sides of equal length
// scalene: all 3 sides different
// to be valid: all sides greater than 0, sum of 2 shortest sides greater than the
// longest side.

 // algorithm:
 // create an array using the arguments as values. Sort by ascending order.
 // Check for validity. If the array includes 0, return invalid.
 // If the sum of array[0] and array[1] is greater than array[2] return invalid.
 // Check if all sides are equal, if so return equilateral
 //   iterate through the array, select all elements that match the first elements
 // check the length of the results array.
 // if it is 3, return equialateral[]
 // if it is 2, return isosceles.
 // If neither of these criteria are met, return scalene

 function triangle(a, b, c) {
   sidesArray = [a, b, c]
   sidesArray.sort(function (sideA, sideB) {
     return sideA - sideB;
   })

   if (sidesArray.includes(0)) {
     return 'invalid';
   }
   if (sidesArray[0] + sidesArray[1] <= sidesArray[2]) {
     return 'invalid';
   }

   var myRegex = new RegExp(sidesArray[1], 'g');
   var equalSides = sidesArray.join('').match(myRegex).length;

   switch (equalSides) {
     case 3:
       return 'equilateral';
       break;
     case 2:
       return 'isosceles';
       break;
    default:
      return 'scalene';
   }

 }


// examples:
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 2, 2));        // "invalid"
