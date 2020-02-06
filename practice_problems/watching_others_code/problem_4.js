 // input: a string of a list of ranges, representing a list of numbers, which includes each
 // nubmer from the expanded range, in the order that the ranges are listed in
 // output: An array containing the list of numbers represented by the list of ranges.
 // algorithm:
 // split string on commas into a an array list of ranges
 // loop through the ranges, separate ranges into subarrays by
 // splitting on the range delimiters (-, .., :)
 // iterate through each subarray and transform them by generating the full numbers of all digits
 //   - nextNumber function
 //      uses the significantDigits and previous number, appends the sd's to the end
 //      of the lowest number that makes the nextNumber greater than the previous number
          // set previous number to 0.
 //       start with 0 and check if that appended to the significantDigits(converted to a number) is greater than
//        the previous number. Then save that number as the previous number. Keep track of
//        the leading digit, always start checking with that.
// iterate through the whole rangeArray and transform by iterating through
//  each rangeSubarray and return an expanded range
//   - range function - uses first and last elements of the rangeSubarray as start and stop
//      create a results array starting with the start number of rangeSubarray, push to an array, add 1 push to the
//      array, repeat until the stop number of the rangeSubarray is pushed to an array and
//      return
// flatten array and return, or join to a string
//

function expandRanges(rangeString) {
  var rangeArray = rangeString.split(/,\s*/);
  rangeArray = rangeArray.map(function (array) {
    return array.split(/\.{2}|[\-*\:*]/)
  });

  rangeArray = rangeList(rangeArray);

  return rangeArray.flatMap(generateRange);

}
function fullNumberArray(array, previousNumber,) {
  return array.map(function (significantDigit) {
    var fullNumberString = String(significantDigit);
    var i;
    for (i = 0;; i++) {
      if (parseInt(fullNumberString, 10) > parseInt(previousNumber, 10)) {
        previousNumber = parseInt(fullNumberString, 10)
        return fullNumberString
      } else {
        fullNumberString = i + String(significantDigit);
      }
    }
  })
}

function rangeList(arrays) {
  var resultsArray = [];
  var previousNumber = 0;
  var i;

  for (i = 0; i < arrays.length; i++) {
    resultsArray.push(fullNumberArray(arrays[i], previousNumber));
    var previousArray = resultsArray[i];
    previousNumber = previousArray[previousArray.length-1];
  }

  return resultsArray;
}

function generateRange(array) {
  var start = parseInt(array[0], 10);
  var end = parseInt(array[array.length - 1], 10);
  var range = []
  var i;
  for (i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

 // test cases:
console.log(expandRanges("1, 3, 7, 2, 4, 1")) //--> 1, 3, 7, 12, 14, 21
console.log(expandRanges("1-3, 1-2")) //--> 1, 2, 3, 11, 12
//                        [[1,2, 3], [11,12]]
console.log(expandRanges("1:5:2")) //--> 1, 2, 3, 4, 5, 6, ... 12
console.log(expandRanges("104-2")) //--> 104, 105, ... 112
console.log(expandRanges("104..02")) //--> 104, 105, ... 202
console.log(expandRanges("545, 64:11")) //--> 545, 564, 565, .. 611
console.log(expandRanges("1-8..3, 9, 7")) //--> 1, 2, 3 .. 13, 19, 27
console.log(expandRanges("1:5:2:1")) //--> 1, 2, 3, 4, 5, 6, ... 12 ... 21
