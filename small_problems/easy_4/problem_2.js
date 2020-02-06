 // input: 2 arrays
 // output: 1 array containing the union of the values from the two. No duplication of
 // values
 // algorithm: Create a results array and copy first array to it. loop through
 // second array and add each element to results array if it is not already included in it.
function union(array1, array2) {
  var resultArray = array1.slice();
  var i;
  for (i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      resultArray.push(array2[i]);
    }
  }

  return resultArray
}


 console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
