 // input: floating point number
 // output:  string of degrees minutes and seconds
 // algorithm: return whole number portion as degrees. multiply decimal part by 60. whole number
 // portion is minutes. Multiply remaining decimal point by 60, that result is seconds.
 // Build the string and return.
var DEGREE = '\xB0';
function dms(degreesFloat) {
  var degreesInt = Math.floor(degreesFloat);
  var remainingDecimal = (degreesFloat - degreesInt) * 60;
  var minutes = Math.floor(remainingDecimal);
  var seconds = Math.round((remainingDecimal - minutes) * 60);

  return `${degreesInt}${DEGREE}${addZero(String(minutes))}'${addZero(String(seconds))}"`;
}

function addZero(number) {
  return number.length === 1 ? "0" + number : number
}
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
