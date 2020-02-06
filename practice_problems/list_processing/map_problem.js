 // input: an array and a function
 // output:  a new array where each element is the return value for the callback
 // function for the corresponding element in the original array.
 // algorithm: initialize a result array. Iterate through the array, each time
 // push the results of the callback function to the result array. Return the
 // result array.



function myMap(array, func) {
  results = [];
  var i;
  for (i = 0; i < array.length; i++) {
    results.push(func(array[i]));
  }
  return results;
}

var plusOne = function (n) { return n + 1; };

console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
