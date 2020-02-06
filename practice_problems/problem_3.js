// input: numerical length and numerical width
// output: a number representing the area in meters and converted to feet.
// algorithm: Prompt the user for a length and a width, convert strings to numbers
// save to variables
// multiply l and w to find the area in meters. Multiply area by 10.7639 to find
// square feet. Log to console.

var length;
var width;
var area;
length = Number(prompt("Enter a length in meters"));
width = Number(prompt("Please enter a width in meters"));
area = length * width;
areaInFeet = area * 10.7639;
var message = `The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`;
console.log(message);
