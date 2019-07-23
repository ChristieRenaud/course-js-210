// input: positive integer
// output: logs all the odd numbers from 1 to passed in number n.
// algorithm: loop through the numbers starting with 1 and ending
// with n. Log numbers that are evenly divisible by 0.

function logOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

logOddNumbers(12);

//FE 1

function logOddNumbers(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
};

logOddNumbers(15);

//FE 2

function logOddNumbers(num) {
  var i;
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
};

logOddNumbers(12);
