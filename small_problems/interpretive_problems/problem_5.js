 // input: an odd integer representing the number and length of rows.
 // output:  an 8-pointed star made up of strings of spaces and stars.
 // requirements:
 // - the middle row has n stars
 // - all other rows have 3 stars and n-3 spaces
 // - all rows except middle are made up of spaces, star, spaces, star, spaces, star, spaces
 // - the top (n-1)/2 rows mirror the bottom (n-1)/2
 // - the maximum amount of spaces between stars is (n-1)/2 -1
 // - the minimum amount is 0
 // - the number of spaces before the first and after the third star is the same  (outer)
 // - the number of spaces between the first and second star , and between the second and
 //   third star is the same. (inner)
 // - you could come up with an array of spaces for the outer spaces, and inner spaces.
 // - top outer(increasing, from 0 to (((n-1)/2) - 1)) == bottom inner
 // - bottom inner (decreasing from (((n-1)/2) - 1) to 0) == top outer
 // - for the inner row all the spaces are 0
 // - each row output is xspaces, star, y spaces, star, y spaces. star, x spaces

// algorithm:
// data type: strings for the star/space output, arrays of number of spaces for each position
// - determine the number of maxSpaces - ((n-1)/2) - 1)
// - Configure an array with maxSpaces + 1 elements for the outer spaces and inner spaces for the top lines
// -- outer array start with 0, upto maxSpaces, incrementing by 1
// -- inner array start with maxSpaces, down to 0, decrementing by one
// - output the first maxSpace + 1 lines by iterating maxSpaces + 1 times and logging
//   on each line log incArray[index] * space, star, decArray[index] * space, star,
//   decArray[index] * space, star, incArray[index] * space
// - output the middle line
//   - log n stars
// - output the last maxSpace + 1 lines by iterating maxSpaces + 1 times and logging:
//   - on each line log decArray[index] * space, star, incArray[index] * space, star,
//   incArray[index] * space, star, decArray[index] * space

function star(n) {
  var maxSpaces = (n - 1)/2 - 1;
  var spokeLength = (n - 1)/2;
  var increasingArray = [];
  var decreasingArray = [];
  var i;
  for (i = 0; i < spokeLength; i += 1) {
    increasingArray.push(i);
    decreasingArray.push(maxSpaces - i);
  }
  var j;
  for (j = 0; j < spokeLength; j += 1) {
    var upperRow = constructRow(j, increasingArray, decreasingArray);
    console.log(`${upperRow}`);
  }
  console.log('*'.repeat(n));
  var k;
  for (k = 0; k < spokeLength; k += 1) {
    var lowerRow = constructRow(k, decreasingArray, increasingArray);
    console.log(`${lowerRow}`);
  }
}

function constructRow(index, array1, array2) {
  return ' '.repeat(array1[index]) + '*' + ' '.repeat(array2[index]) + '*' +
  ' '.repeat(array2[index]) + '*' + ' '.repeat(array1[index]);
}

// function constructLowerRow(index) {
//   return ' '.repeat(increasingArray[index]) + '*' + ' '.repeat(decreasingArray[index]) + '*' +
//   ' '.repeat(decreasingArray[index]) + '*' + ' '.repeat(increasingArray[index]);
// }

star(11);  //max spaces: 4  spokeLength:        5
// // logs
// *    *    *  spaces: 0, 4, 4, 0
//  *   *   *   spaces: 1, 3, 3, 1
//   *  *  *    spaces: 2, 2, 2, 2
//    * * *     spaces: 3, 1, 1, 3
//     ***      spaces: 4, 0, 0, 4
// ***********
//     ***
//    * * *
//   *  *  *
//  *   *   *
// *    *    *

star(9);    //max spaces: 3
// logs
// *   *   *   spaces: 0, 3, 3, 0
//  *  *  *    spaces: 1, 2, 2, 1
//   * * *     spaces: 2, 1, 1, 2
//    ***      spaces: 3, 0, 0, 3
// *********   spaces: 0, 0, 0, 0
//    ***      spaces: 3, 0, 0, 3
//   * * *     spaces: 2, 1, 1, 2
//  *  *  *    spaces: 1, 2, 2, 1
// *   *   *   spaces: 0, 3, 3, 0

// first and last space 0 ... 3
// 2nd and 3rd space 3 ... 0

star(7); // max spaces: 2
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(13); // max spaces: 5   Math.floor(.5 * n) - 1
