// input: two numbers: bill and tip calculator
// output: tip and total bill.
// algorithm: prompt for the bill and tip calculator. Convert string to
// number. Convert tip from percentage to decimal. Save to variables.
// calculate tip by multiplying bill by tip percentage. log tip to console. Add
// tip to bill and log total bill.



var bill = prompt('What is the bill?');
var tipPercent = prompt('What is the tip percentage?');
bill = parseFloat(bill);
tipPercent = parseFloat(tipPercent) / 100;
var tip = bill * tipPercent;
var totalBill = bill + tip;

console.log(`The tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${totalBill.toFixed(2)}`);
