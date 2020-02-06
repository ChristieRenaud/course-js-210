 // input: array with 3 subarrays of 3 elements
 // output:  a new array of subarrays with the elements transposed
 // algorithm:



function transpose(matrix) {
  var transposedMatrix = [[], [], []];
  var colInd = 0;
  var rowInd;
  matrix.forEach( function (subarray) {
    rowInd = 0;
    subarray.forEach( function (number) {
      transposedMatrix[rowInd][colInd] = number;
      rowInd++;
    })
    colInd++;
  });

  return transposedMatrix;

}

 var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
