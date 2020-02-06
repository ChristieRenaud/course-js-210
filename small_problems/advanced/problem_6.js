 // input:  an array
 // output:  the array sorted using the merge sort method
 // rules: Break the array down into subarrays add them merging each pair of single element subarrays
 // until all elements are merged into a flat array.
// example
 // [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
 //
 // split into subarrays each with 2 subarrays with equal or near equal elements.
 // split these subarrays into 2 subarrays with equal elements.
 // Keep splitting the subarrays until all arrays have 1 element.
 // start merging:
 // merge the 2 elements in each subarray.
 // merge the sorted elements with the sorted element next to it.
 // keep merging until all elements are merged into one array.


 // algorithm:

 // function mergeSort(array) {
 //   var length = array.length;
 //   subArray = divideArray(array)
 //   var results = []
 //   var n = length;
 //   var idx;
 //   for (idx = 0; idx < Math.ceil(length/2 - 1); idx++) {
 //     while (n >= 1) {
 //
 //       subArray = divideArray(subArray[idx]);
 //
 //       n = subArray.length;
 //    }
 //  }
 //  return results;
 // }

 function mergeSort(array) {
   var subArray1;
   var subArray2;

   if (array.length === 1) {
     return array;
   }

   subArray1 = array.slice(0, array.length / 2);
   subArray2 = array.slice(array.length / 2);

   subArray1 = mergeSort(subArray1);
   subArray2 = mergeSort(subArray2);

   return merge(subArray1, subArray2);
 }

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



 // Examples
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
