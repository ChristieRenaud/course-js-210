// input: 2 arrays;
// output: returns an array with the first element of the first array and
// the last element of the last array.


function endsOf(beginningArr, endingArr) {
  var results = [];

  //results.push(beginningArr[0], endingArr[endingArr.length - 1]);
  return [beginningArr[0], endingArr[endingArr.length - 1]];
  //return results;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
