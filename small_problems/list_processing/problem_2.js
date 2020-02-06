 // input: an array of integers between 0 and 19
 // output:  an array of those integers sorted based on the English word for
 // each number
 // algorithm: create an object with numbers as keys and the associated english
 // word for it as the value. loop through the array, sort the list based on the
 // english word for each number.

var NumberLookup = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
}

function alphabeticNumberSort(array) {
  return array.sort(function(number1, number2) {
    if (NumberLookup[number1] < NumberLookup[number2]) {
      return -1;
    } else if (NumberLookup[number1] < NumberLookup[number2]) {
      return 1;
    } else {
      return 0;
    }
  })
  






 console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
