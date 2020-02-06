// input: a string representing an encoded message, no of rails
// output: string decoded message

// Algorithm
// create an encoded array with rows # of subarrays, each with message.length spaces
// go through the encoded message and assign each letter to the correct
// spot
//  Steps:
// - create encodedMessageArray. add the rows number of subarrays to it
// - iterate through the encoded message array.
// - determine x(row or subarray) and y(column or position in subarray) position
// - for first letter of each row, position is [i, i], where i is the index
//   of the subarray
//  push the letter to that position in the encoded array
// - the next letter is [i][(rows - 1) * 2, or n] position in the encoded array,
//   if y is less than the message length.
// - keep adding n to n for the y position, repeating until y is more than the message length.
// then increment i (go to the next row) ** n is the distance(d) between characters
// on the next row, start at i, y. y == i
//  - the next letter is [i, y + n - 2i], ** n - 2i is the distance(d) between characters
// save new value of y
//  - the next letter on that row is [i, y + n - (n - 2i)], ** n - (n - 2i) is the distance between characters on that row
// save new value of y
// - alternating until y will be > message length, don't assign the next letter
// then increment i and go to the next row.
// repeat the last row formula until space between letters(d) becomes 0,
// - d becomes n
 // add n to each y position and push the next letter to the right spot in
 // the encoded array until y > message.length
//
// read across going up and down
// variables: encodedMessage, encodedMessageArray, rows, xIndex (row), yIndex (column)
// n (space between letters in first and last row), d (distance between letters)
// on the current row.

function decodeMessage(encodedMessage, rows) {
  var encodedMessageArray = [];
  var messageLength = encodedMessage.length;
  var i;
  for (i = 0; i < rows; i++) {
    encodedMessageArray.push([]);
  }
  var letterIndex = 0;
  var n = 2 * (rows - 1);
  var d = n;
  var xIndex = 0; // current row
  var yIndex = 0;
  for (; xIndex < rows; xIndex++) {
    var firstSpace = true;
    yIndex = xIndex;
    while (yIndex < messageLength) {
      encodedMessageArray[xIndex][yIndex] = encodedMessage[letterIndex];

      letterIndex += 1;
      if (xIndex === 0 || xIndex === (rows - 1)) {
        d = n;
      } else {
        if (firstSpace) {
          d = n - (2 * xIndex);
          firstSpace = false;
        } else {
          d = n - (n - (2 * xIndex));
          firstSpace = true;
        }
      }
      yIndex = yIndex + d;
    }
  }

  var xPositions = generateXPositions(messageLength, rows)

  decodedMessage = '';
  encodedMessage.split('').forEach(function (element, index) {
    decodedMessage += encodedMessageArray[xPositions[index]][index];
  });

  return  decodedMessage;
}

function generateXPositions(messageLength, rows) {
  var xPositions = [];
  while (xPositions.length <= messageLength) {
    var i;
    for (i = 0; i < rows - 1; i++) {
      xPositions.push(i);
    };
    for (; i > 0; i--) {
      xPositions.push(i);
    };
  };
  return xPositions;
}
// test cases
console.log(decodeMessage("WECRLTEERDSOEEFEAOCAIVDEN", 3))
// "WEAREDISCOVEREDFLEEATONCE"
console.log(decodeMessage("MHAECRMSRYITRS", 4)) // "MERRY CHRISTMAS"

/*
M * * * * * H * * * * * A *
* E * * * C * R * * * M * S
* * R * Y * * * I * T * * *
* * * R * * * * * S * * * *

*/
