 // input: Two arrays of numbers
 // output: an array that contains all the products of the combinations or number
 // pairs that exist in the two arrays, sorted in ascending numerical order.
 // algorithm: loop through the first array and map the number multiplied by each
 // of the numbers from the second array. combine arrays. sort by ascending numerical
 // order


 function multiplyAllPairs(array1, array2) {
   return array1.flatMap(function (firstArrayNumber) {
     return array2.map(function (secondArrayNumber) {
       return firstArrayNumber * secondArrayNumber;
     });
   }).sort(function (number1, number2){
     return number1 - number2;
   });
 }

 console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
