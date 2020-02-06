// input: a number
// output: a number representing the index of the first Fibonacci number that
// has the number of digits specified by the argument.
// definition: the first two fib numbers are both 1, each subsequent number
// is the sum of the two previous numbers.
// algorithm: create a function to generate the fib number at each index. Loop through them, keeping track of the index
// of each number. Convert each number into a string and find its length. If the
// string.length is equal to the argument, return the numbers index.
//

function findFibonacciByIndex(index) {
  if (index === 1 || index === 2) {
    return 1;
  }

  var i;
  var firstNumber = 1;
  var secondNumber = 1;
  var fibNumber = 0;
  for (i = 3; i <= index ; i++) {
    fibNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibNumber;
  }

  return fibNumber;
}

console.log(findFibonacciByIndex(2));
console.log(findFibonacciByIndex(4));
console.log(findFibonacciByIndex(8));

function findFibonacciIndexByLength(length) {
  var i;

  for (i = 1; ; i++) {
    var fibNumber = findFibonacciByIndex(i);
    if (String(fibNumber).length === length) {
      return i;
    }
  }
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
