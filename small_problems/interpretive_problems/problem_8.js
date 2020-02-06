 // input:  number n
 // output: nth number of fib sequence
 // algorithm:

// create an object to save each fib n to as it is produced.

fibObject = {
  1: 1,
  2: 1,
}

 function fibonacci(n) {
   if (n <= 2) {
    return fibObject[n];
  } else {
    fibObject[n] =  fibonacci(n-1) + fibObject[n-2];
    return fibObject[n];
  }
 }


 console.log(fibonacci(1));       // 1
 console.log(fibonacci(2));       // 1
 console.log(fibonacci(3));       // 2
 console.log(fibonacci(4));       // 3
 console.log(fibonacci(5));       // 5
 console.log(fibonacci(12));      // 144
 console.log(fibonacci(20));      // 6765
