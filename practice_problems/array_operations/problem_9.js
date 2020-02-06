// input: twoe argument arrays.
// output: Returns a new array that contains the values
// from each of the original arrays.
// algorithm: create newarray. pushe each element of first array new array. push
// each element of second array 2 new array. return new array.

function concat(array1, array2) {
  newArray = [];
  var i;
  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  for (i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
