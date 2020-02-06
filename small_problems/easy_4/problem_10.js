 // input: an array of integers
 // output:  the average of the numbers rounded down to an integer
 // algorithm: loop through the numbers and multiply each to a sum variable.
 // divide by the length of the array. Use Math.floor to return an integer.

 function average(integerArray) {
   var sum = 0;
   integerArray.forEach(function(integer) {
     sum += integer;
   })
   return Math.floor(sum/integerArray.length);

 }



console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
