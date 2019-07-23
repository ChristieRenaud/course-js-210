// input: an integer
// output: every pair of prime numbers that add up to the given number.
// rules: odd numbers and numbers less than 4 log nile. All even numbers over 2
// return at least one pair prime numbers. The both numbers may be the same.
// log the smaller number first.
// algorithm: check for odd number or less than 4 and log null.
// Find all pairs of numbers that add up to the number. Check if both are primes.
// Stop checking when the first number is half the target number.
function isPrime(num) {
  if (num === 1) { return false }
  var limit = num - 1;
  var i;
  for (i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function checkGoldbach(num) {
  if (num < 4 || num % 2 === 1) {
    console.log(null);
  }
  var i;
  var j;
  for (i = 2; i <= num / 2; i += 1) {
    j = num - i;
    if (isPrime(i) && isPrime(j)) {
      console.log(i + " " + j);
    }
  }
};

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
