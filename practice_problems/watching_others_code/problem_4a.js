
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
console.log(transformArrays(arrays));
