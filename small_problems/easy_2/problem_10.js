// input: a number representing the year
// output: a string representing the century
// rules: 1 - 100: 1st
//        101 - 200: 2nd
// century is 1 more than the year / 100.
// years ending in 0 go with previous century.
// algorithm: First find the century number, then the 'ending'.
// to find the century, subtract 1 and divide by 100. Then add 1. Use Math.floor(number)
// to get rid of decimal point.

// to find ending: convert to a string, if the last digit is a 1, add 'st'.
//if the last digit is a 2, add 'nd'
// if the last digit is a 3, add 'rd'
// else add 'th'

function century(year) {
  var century = Math.floor(((year - 1 )/ 100) + 1);
  century = century.toString();
  var lastChar = century.substring(century.length - 1);
  if (century.length < 2) {
    var secondLastChar = 0;
  } else {
    var secondLastChar = century.substr(century.length - 2, 1);
  }
  if (secondLastChar === '1') {
    century += 'th';
  } else if (lastChar === '1') {
    century += 'st';
  } else if (lastChar === '2') {
    century += 'nd';
  } else if (lastChar === '3') {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(316));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11801));       // "113th"
