 // input:  a string representing a octal number
 // output:  the octal number converted to a decimal number
 // algorithm: split the number into an array of number characters.Transform each string
 // into a number and multiply by 8^i. Add all the numbers together and return the number.

function octalToDecimal(numberString) {
  numberArray = numberString.split('');
  reverseArray = numberArray.reverse();
  return reverseArray.map( function (element, index) {
    return (Number(element) * (8**index));
  }).reduce( function (sum, element) {
    return sum + element
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
