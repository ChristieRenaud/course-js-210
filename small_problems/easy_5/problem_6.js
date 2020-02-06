 // input:  an integer
 // output:  an array of all the integers from 1 up to including the number
 // algorithm: loop starting at 1, ending at the number. Push each index to
 // a new array and return it.

 function sequence(number) {
   var sequenceArray = [];
   var i;
   for (i = 1; i <= number; i++) {
     sequenceArray.push(i);
   }
   return sequenceArray;
 }



console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
