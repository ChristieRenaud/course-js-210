 // input: two arrays
 // output: a new array that contains all elements from both arrays alternating
 // algorithm: Create a results array.Loop through both arrays pushing the elements with the same
 // index to the new array on each iteration.


function interleave(array1, array2) {
  var combinedArray = [];
  var i;
  for (i = 0; i < array1.length; i++) {
    combinedArray.push(array1[i], array2[i]);
  }

  return combinedArray;
}
 console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
