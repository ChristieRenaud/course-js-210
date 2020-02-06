// input: an array;
// output: a new array containing all values from the original with  odd indexes
// algorithm: create results array. Loop through array startin with 1, incrementing
// by 2. push elements to results array and return that array.


function oddElementsOf(arr) {
  var results = [];
  var i;
  for (i = 1; i < arr.length; i += 2) {
    results.push(arr[i]);
  }
  return results;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]
