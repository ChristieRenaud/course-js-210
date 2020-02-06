// input: an integer
// output: the sum of all numbers between 1 and the integer, inclusive that are
// multiples of 3 or 5
// algorithm: start with 1 and ending with the given number, check if each
// number is a multiple of 3 or 5, if it is add to the total. Return the total.

function multisum(number) {
  var total = 0;
  var i;
  for (i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
