// input:
// output: a randomly generated number between 20 and 200 inclusive
// algorithm:
function randomBetween(num1, num2) {
  var max = Math.max(num1, num2);
  var min = Math.min(num1, num2);
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
var age = randomBetween(20, 200)

console.log(`Teddy is ${age} years old!`)

var age = randomBetween(200, 20)

console.log(`Tim is ${age} years old!`)
