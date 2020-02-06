 // input:  2 sorted arrays
 // output:  a new array made of all elements from both arrays, sorted.
 // rules:
 // May not sort the results array. Must build one element at a time.
 // Must not mutate the original array.
 // algorithm:
// 1. start iterating through the first array. if the first element is equal or greater
// than the first element of  the second array, push the first element to the results array
// and proceed to comparing the 2nd element of the first with the first element of the
// second,
// If not, push the first element of the second array to the results array, and check the
// first element against the second element of the second array. If it is bigger, push that element to the results
// array and move on to the next element in the first array. If not, push the second element of the second array
// to the results array.
// If there are no elements left to compare (index is equal to array.length)in one array, add the remaining elements of the
// other array to the results array.
// Keep track of the index of each array and increment when an element of that array
// has been pushed to the results array.Stop iterating when the index reaches array length for each array.
//
function merge(array1, array2) {
  var idx1 = 0;
  var idx2 = 0;
  var results = [];
  while (idx1 < array1.length && idx2 < array2.length) {
    if (array1[idx1] < array2[idx2]) {
      results.push(array1[idx1]);
      idx1 += 1;
    } else {
      results.push(array2[idx2]);
      idx2 += 1;
    }
  };
  if (idx1 === array1.length) {
    return results.concat(array2.slice(idx2));
  } else {
    return results.concat(array1.slice(idx1));
  }
};




 // examples:
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([2, 3, 8], [1, 4, 9]));     // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 1, 1], [1, 1, 2, 2]));
