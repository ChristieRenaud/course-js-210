function transpose(matrix) {
  var transposedMatrix = [];
  var colInd = 0;
  var rowInd;
  var newRowsCount = matrix[0].length;

  for (rowInd = 0; rowInd < newRowsCount; rowInd += 1) {
    transposedMatrix.push([]);
  }

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







console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
