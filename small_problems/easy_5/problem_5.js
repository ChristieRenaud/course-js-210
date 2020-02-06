 // input: a number
 // output:  return the negative form of each number
 // algorithm: if negative return the number, if not return the negative of the number

 function negative(number) {
   return number < 0 ? number : -number
 }


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
