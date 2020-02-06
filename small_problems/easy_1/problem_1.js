// input
// output: log all odd numbers from 1 to 99 inclusive

// loop starting at 1 and ending at 99. Log numbers which are evenly
// divisible by 2.

var i;
for (i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
