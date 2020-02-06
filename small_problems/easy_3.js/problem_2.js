// input: 6 numbers
 // output: a string telling whether the 6th number appears in the preceding
 // 5 numbers
 // algorithm: prompt for the first 5 numbers and push each to an array.
 // check if the 6th number appears in the array and log the result
//
// var results = [];
// results.push(prompt('Enter the 1st number:'));
// results.push(prompt('Enter the 2nd number:'));
// results.push(prompt('Enter the 3rd number:'));
// results.push(prompt('Enter the 4th number:'));
// results.push(prompt('Enter the 5th number:'));
// var lastNumber = prompt('Enter the last number:')
// if (results.indexOf(lastNumber) !== -1) {
//   console.log(`The number ${lastNumber} appears in [${results.join(', ')}].`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in [${results.join(', ')}].`);
// }

function isBigger(arr, val) {
   return arr.some(function(element) {
     return element > val;
  });
}
console.log(isIncluded([2, 3, 4, 5], 3));
console.log(isIncluded([2, 3, 4, 5], 8));
