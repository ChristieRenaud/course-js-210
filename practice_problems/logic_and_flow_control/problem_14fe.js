function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;

  for (i = 0; i <= limit; i += 1) {
    matchCount = 0;

    for (j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
};

function lastIndexOf(firstString, secondString) {
  var k = 0;
  var index;
  var final_index = -1;
  while (k < firstString.length - secondString.length) {
    index = indexOf(firstString.substring(k), secondString);
    if (index >= 0) {
      final_index = k + index;
    }
    if (index === -1) {
      break;
    }
    k = final_index + 1;
  }
  return final_index;

}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
