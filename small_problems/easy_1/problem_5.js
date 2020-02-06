// input: integer n greater than 0 and s or p for sum or product
// output: sum or product of all numbers from 1 to n
// algorithm: find number and sum or product. initiate total var to 0
// if sum start at 1 and add each
// successive number to a total , ending with the number. If product, initiate
// total var to 1 and multiply successive number to a total , ending with the number.
// Log the total.

var number = parseInt(prompt('Please enter an integer greater than 0:'), 10);
var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
var total;
var i;

if (operation === "s") {
  total = 0;
  for (i = 1; i <= number; i++) {
    total = total + i;
  }
} else if (operation === "p") {
  total = 1;
  for (i = 1; i <= number; i++) {
    total = total * i;
  }
} else {
  console.log('Unknown operation.')
}

console.log(`The ${operation === "s" ? "sum" : "product"} of the integers between ` +
            `1 and ${number} is ${total}`);
