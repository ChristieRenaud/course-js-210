 // input: a number representing the nth number of the fib series
 // output:  the value of the nth number
 // algorithm:
// create a variable for the current value and the previous value. Both have values of 1
// create an index starting with 3
// for each loop add the current value and the previous value to get the new current value;
// The old current value becomes the new previous value
// increment the index. Stop when you have computed the n index and return that value
 // examples:

function fibonacci(n) {
  var currentValue = 1;
  var previousValue = 1;
  var newCurrentValue = 0;
  var i;
  for (i = 3; i <= n; i++) {
    newCurrentValue = currentValue + previousValue;
    previousValue = currentValue;
    currentValue = newCurrentValue;
  }
  return currentValue;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
