// Problem 1, encoding the message
// input:  a string representing a secret message to be encoded using the rail cypher, and a number
// representing the number of rails, or rows to use.
 // output:  a string representing the encoded message using the rail cypher
 // mental model:
 // Start with the message you want to encode
 // 1. write out the message on the rails, using the number given for
 // the number of rows of letters, zigzagging up and down. Do not include spaces
 // 2. Read across each row from left to right, skipping empty spaces, to create
 // the encoded message
 // algorithm:
 // - remove spaces and split the message into an array.
 // - generate an array of x positions for the rails
//    - use the number of rows - 1 as the upper limit
//    - use two for loops inside a while loop.
//    - while the array size is less than the message length
//    - in first loop start at i = 0 and increment one until the limit of rows
//       - push each i into the x-position array
//    - in the second array stop when i = 0 and decrement i each iteration.
//    - push each i into the em array.
 // - for each element of the message array assign to correct spot in the encoded message array
 //   -steps: the spot is the element in the x-position array[index],[index]
//
// - filter the em array to remove empty slots
 // - join the encoded message into a string.
 //


function encodeMessage(message, rows) {
  messageArray = message.replace(/\s/g, '').split('');
  var xPositions = generateXPositions(messageArray, rows);

  var encodedMessage = [];
  var j;

  for (j = 0; j < rows; j++) {
    encodedMessage.push([])
  }

  messageArray.forEach(function (element, index) {
    encodedMessage[xPositions[index]][index] = element;
  });
  return encodedMessage.flat().filter(function () {return true}).join('');
}

function generateXPositions(messageArray, rows) {
  var xPositions = [];
  while (xPositions.length < messageArray.length) {
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

// test cases:
console.log(encodeMessage("WE ARE DISCOVERED FLEE AT ONCE", 3))
// "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(encodeMessage("MERRY CHRISTMAS", 4)) // "MHAECRMSRYITRS"

/*
M * * * * * H * * * * * A *
* E * * * C * R * * * M * S
* * R * Y * * * I * T * * *
* * * R * * * * * S * * * *

*/
