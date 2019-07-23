// input: 2 positive integers
// output: the greatest common divisor of both numbers
// definition: The greatest common divisor is the largest number that goes into a
// number equally which is common to both numbers.
// algorithm: find the divisors of both numbers and compare to find the largest
// that is the same in both.

function gcd(number1, number2) {
  if (number1 < number2) {
    var number1Copy = number1;
    number1 = number2;
    number2 = number1Copy;
  }
  var remainder = 1;
  while(remainder != 0) {
    remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  }
  console.log(number1);
  return number1;
};

gcd(12, 4);
gcd(15, 10);  // 5
gcd(9, 2);    // 1

gcd(4, 12);
gcd(10, 15);
gcd(2, 9);
