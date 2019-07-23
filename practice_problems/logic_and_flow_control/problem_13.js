// input: a number of rows as argument n
// output: a square of numbers and asterisks
// number of rows is equal to n; characters in each row is
// equal to n
// algorithm:

function generatePattern(num) {
  var i = 1; // row number
  while (i <= num) {
    var string = "";
    var j = 1; // character number
    while (j <= num) {
      if (j <= i) {
        string += String(j);
      } else {
        string += "*";
      }
      j++;
    }
    console.log(string);
    i++;
  }
}

generatePattern(1);
generatePattern(2);
generatePattern(3);
generatePattern(9);
generatePattern(10);
