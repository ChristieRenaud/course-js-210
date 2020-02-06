 // input: a positive integer
 // output: the sum of its digits
 // algorithm: separate the number into an array of its digits. Iterate
 // through the array and add each digit to the sum of all the previous numbers.
  // return the final answer.

  function sum(number) {
    digits = number.toString().split('');
    return digits.map(function (digit) {
      return parseInt(digit, 10);
    }).reduce(function (sum, number) {
      return sum + number;
    });
  }

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
