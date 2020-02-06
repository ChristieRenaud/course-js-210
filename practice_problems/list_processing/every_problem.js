 // input:  an array and a function
 // output:  returns true if every element passed to the function evaluates
 // as truthy.
 // algorithm: Iterate through each element in the array. Call the function on each element
 // if the function returns false stop and return false. If it always returns true,
 // return true for the function.


function myOwnEvery(array, func) {
  var result = true;
  array.forEach(function (element, index, array) {
    if (func(element) === false) {
      result = false;
    }
  })
  return result;
}

var isAString = function (value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery([1, 'a234', '1'], isAString));
