 // input:  2 integers, the first is the number of multiples, the second is the
 // starting number
 // output:  an array with first integer amount of multiples of the second number
 // if the count is 0 the function should return an empty array.
 // algorithm: loop through the count number of times, starting index at 1; each
 // iteration multiply the starting number by the index and push to a results
 //array.

function sequence(count, start) {
  results = [];
  var i;
  for (i = 1; i <= count; i++) {
    results.push(start * i);
  }
  return results;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
