// input: an array or arrays
// output: a new array that contains the sums of eahc of the sub-arrays.
// algortihm: loop through the array and add all the elements together. Push
// those sums to a new array.

function matrixSums(arr) {
  var sumArray =[];
  var i;

  for (i = 0; i < arr.length; i++) {
    var sum = 0;
    var j;
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    sumArray.push(sum);
  }
  return sumArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
