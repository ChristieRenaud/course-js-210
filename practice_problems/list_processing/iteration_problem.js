// input: an array and another function.
// output: the function passed to myForEach should mutate a variable in the outer scope
// algorithm: iterate through the array using a for loop. call the passed in variable
// on each element. Return undefined.


function myForEach(array, func) {
  var i;
  for (i = 0; i < array.length; i++) {
    func(array[i]);
  }
  return undefined;
}
var min = Infinity;
var getMin = function (value) {
min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin);    // undefined
console.log(min);                        // 3
