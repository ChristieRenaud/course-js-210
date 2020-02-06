// input: a number indicating  number of stars in sides
// output: n number of rows, starting with 1 star, ending with n stars.
// rules: n rows, n characters in each row. first row has n - 1 spaces, 1 star.
// row 2 has n-2 spaces and n stars. continue until last row has 0 spaces and n
// stars.
// algorithm: loop n times. each time output n minus the row (index) number
// of spaces and n stars. end when row is greater than n.

function triangle(n) {
   var row = 1;
   while (row <= n) {
     console.log(' '.repeat(n-row) + '*'.repeat(row));
     row++;
   }
}

triangle(5);
triangle(9);
