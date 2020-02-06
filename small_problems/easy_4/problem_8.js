 // input:  a positive integer
 // output:  a list of digits in an integer
 // algorithm: convert to a string. split into an array and return.

function digitList(integer) {
  array = String(integer).split('')
  return array.map(function(element) {
      return Number(element)
  });
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
