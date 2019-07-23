// input: number argument  non-negative integer
// output: true if the number is prime, false if not
// algorithm: Loop through all the numbers between 2 and half of number.
// if the number is evenly divisible by any number, stop and return true. if
// not return false

function isPrime(num) {
  var limit = num/2;
  var i;
  for (i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
      break
    }
  }
  return true;
};

isPrime(1);
isPrime(43);
isPrime(44);
