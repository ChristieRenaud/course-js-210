 // input: an odd integer
 // output: logging a series of strings containing spaces and stars
 // requirements:
 // - there are n number of rows
 // - longest row, also the middle row has n stars and 0 spaces
 // - each row can be seen as n characters, a combination of spaces and
 //   stars.
 // - the top half mirrors the bottom half.
 // - the number of stars in each row is an odd number. the first row has 1,
 // each row has 2 more stars than the previous until the middle row which
 // has n stars. the rows after that decrease by 2 until n rows have been Output.
 // - the spaces on the left starts at to 1/2n rounded
  // down then decrease by 1 each row to zero, than increase to 1/2n rounded
  // down.
  // the middle row is 1/2n rounded up.
  // down
  // each row need to know spaces and stars.
 // than
 // data type:
 // array of strings, or a succession of strings logged to the console
 // algorithm:
 // create spaces and stars variables
 // create a results array
 // determine spaces and stars for each row
 // * top half:
 // - first has 1/2n rounded down spaces, and 1 star
 // - the next row has 2 more stars and 2 less spaces
 // - repeat until stars is equal to n
// * bottom half:
 // - 1/2n rounded down stars and 1 space
 // - increase spaces by 2 and decrease stars by 1 each row until stars is equal to 0
 // - push to results array

 // create a function that produces the strings of stars and spaces
 //
 // log results array
//
//

function diamond(n) {
  var spaces;
  var stars;
  var halfNumber = Math.floor(.5 * n);

  topHalf(halfNumber, n);
  console.log(produceString(0, n));
  bottomHalf(n);

}
function topHalf(halfNumber, n) {
  var i;
  var j;
  for (i = 1, j = halfNumber; i <= n && j > 0; i += 2, j -= 1) {
    console.log(produceString(j, i));
  }
}

function bottomHalf(n) {
  results = []
  var j;
  var i;
  for (i = n - 2, j = 1; i >= 1; i -= 2, j += 1) {
    console.log(produceString(j, i));
  }
}
function produceString(spaces, stars) {
  return repeat(' ',spaces) + repeat('*', stars);
}

function repeat(string, number) {
  var resultsString = '';
  var i;
  for (i = 0; i < number; i++) {
    resultsString = resultsString + string;
  }
  return resultsString;
}

 // test cases:
diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *

diamond(7)
 //     *
 //    ***
 //   *****
 //  *******
 //   *****
 //    ***
 //     *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
