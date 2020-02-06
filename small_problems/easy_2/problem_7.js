// input: a number
// output: the number if it is a double double, or double the number
// output: Check if the number is a double double. If it is return it. If not
// multiple the number by 2 and return it. To determine if the number is a double double:
// convert to string. Check if its length is an even number, if not, its not a double double,
// Extract half the number of its length to a subtract, first starting with index 0. Extract another
// substring starting with the index at half its length. Compare both strings, if they
// are equal, the original string is a double double.

function isADoubleDouble(number) {
  number = number.toString();

  var halfLength = number.length / 2;
  if (number.substr(0, halfLength) === number.substr(halfLength)) {
    return true;
  } else {
    return false;
  }
}

console.log(isADoubleDouble(37));          // false
console.log(isADoubleDouble(44));          // true
console.log(isADoubleDouble(334433));      // false
console.log(isADoubleDouble(444));         // false
console.log(isADoubleDouble(107));         // false
console.log(isADoubleDouble(103103));      // true

function twice(number) {
  return isADoubleDouble(number) ? number : (number * 2);
}
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
