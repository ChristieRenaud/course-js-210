
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


arrays = [['5', '2'], ['13', '4'], ['2', '18'], ['9']]


function transformArrays(arrays) {
  var resultsArray = []
  var previousNumber = 0;
  var firstPart = 0;
  resultsArray.push(fullNumberArray(arrays[0], previousNumber))
  var i;

  for (i = 1; i < arrays.length; i++) {
    var previousArray = resultsArray[i-1]
    var previousNumber = previousArray[previousArray.length-1]
    resultsArray.push(fullNumberArray(arrays[i], previousNumber))
  }

  return resultsArray
}
console.log(transformArrays(arrays));

array = ['22', '23'];

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

console.log(generateRange(array))
