 // input: a number n
 // output: the nth fibonacci number
 // algorithm:
// If n is equal to 1 or 2, return 1
// return fib(n-1) + fib(n-2)

function fibonacci(n) {
  if (n === 1 || n === 2) {
   return 1;
 } else {
   return fibonacci(n-1) + fibonacci(n-2);
 }
}

// or

function fibonacci(n) {
  while (n > 2) {
    return fibonacci(n-1) + fibonacci(n-2);
  };
  return 1;
}



console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
