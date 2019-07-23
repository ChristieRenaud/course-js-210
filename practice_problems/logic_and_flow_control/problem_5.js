// input: integer n between 0 and 100
// output: list of values that are odd multiples of n between 0 and 100
// in descending order
// algorithm: loop through numbers from 100 down to 0, log the number if it is odd
// and a multiple of n.

function logMultiples(number) {
  var i;
  for(i = 100; i >= 0; i -= 1) {
    if ((i % number === 0) && (i % 2 === 1)) {
      console.log(i);
    }
  }
}

logMultiples(5);

// FE
// Math.floor(100/number) * number returns the largest multiple of number
// between 0 and 100

function logMultiples(number) {
  var i = Math.floor(100/number) * number;
  for(; i >= 0; i -= number) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(21);
