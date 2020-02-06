 // input:  an array, a function, and an initial value
 // output:  the return value of the final callback invocation
 // algorithm:



function myReduce(array, func, initial) {
  var i = initial === undefined ? 1 : 0;
  var accumulator = initial === undefined ? array[i] : initial;

  for (i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i]);
  }
  return accumulator;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
