 // input: two arrays, each containing a list of numbers
 // output: a new array that contains the product or each pair of numbers from the
 // arguments with the same index.
 // algorithm: create a new array. loop through and push the product of the
 // elements at the same position to the new array. Return it.

function multiplyList(array1, array2) {
  var i;
  var newArray = [];
  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i] * array2[i])
  }
  return newArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
