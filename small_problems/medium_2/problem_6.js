 // input: an integer n
 // output:  the difference between the square of the sum of the first n integers (starting with 1)
 // and the sum of the squares of the first n positive integers

 // rules:
 // (1 + 2 + 3 + ... + n)**2 - (1**2 + 2**2 + 3**2 + ... n**2)
 // algorithm:
 // find squared sums:
 //   starting with 1 and ending after n is processed, add each number to find
 //   the total. then square this number.
 // find the sum of squares:
 //   starting with 1 and ending after n is processed, square each number and add together
 //   to find the total.
 // subract second number from first number.

function findSumSquared(number) {
  var total = 0;
  var i;
  for (i = 1; i <= number; i++) {
    total += i;
  }
  return total**2;
}
function findSquaredSums(number) {
  var total = 0;
  var i;
  for (i = 1; i <= number; i++) {
    total += i**2;
  }
  return total;
}
function sumSquareDifference(number) {
  return findSumSquared(number) - findSquaredSums(number)
}




 // examples:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
