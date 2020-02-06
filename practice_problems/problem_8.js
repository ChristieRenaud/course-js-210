// input: a year greater than 0
// output: return true or false
// rules: leap years are any year evenly divisible by 4. If the year is divisible
// by 100 but not divisible by 400 it is not a leap year.
// algorithm: check if number is divisible by 4, if not return false.
// check if it is divisible by 100 and not divisible by 400. If so return false.
// For all others return true.

// function isLeapYear(year) {
//   if (year <= 0) {return 'Invalid year'}
//   if (year < 1752) {
//     if (year % 4 !== 0) {
//       return false
//     }
//   } else if ((year % 4 !== 0) || ((year % 100 === 0) && (year % 400 !== 0))) {
//     return false;
//   }
//   return true;
// }

function isLeapYear(year) {
  if (year <= 0) {return 'Invalid year'}
  if (year % 4 !== 0) {
    return false
  }
  if (year >= 1752) {
    if ((year % 100 === 0) && (year % 400 !== 0)) {
    return false;
    }
  }
  return true;
}


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
