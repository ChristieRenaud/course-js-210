// input:
// output: a string version of each number that is divisible by 3 or 5;
// if a number is divisible by both 3 and 5 add a ! to the number when you output it;
// algorithm: loop through integers 1 to 100. Check if it is evenly divisible
// 3, if it is check to see if it is divisible by 5. if it is log the number
// plus a !. If not log the number. If it isn't divisible by 3, check to
// see if it's divisible by 5. If yes, log the number, if not move on
// to next number.

function multiplesOfThreeAndFive() {
  var i;
  for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(String(i) + "!");
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      console.log(String(i));
    }
  }
};

multiplesOfThreeAndFive();

// FE
function multiplesOfThreeAndFive(num1, num2) {
  var i;
  for (i = num1; i <= num2; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(String(i) + "!");
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      console.log(String(i));
    }
  }
};

multiplesOfThreeAndFive(4, 55);
