// input: an array.
// output: a new array with all the elements from the first array and then
// all the elements from the original array in reverse order.
// algorithm: copy the first array to a new array. then iterate thru the
// original array starting at array.length - a, stopping at less than array.length,
// counting down by 1's. Push each element to the new array.

function mirroredArray(arr) {
  arrCopy = arr.slice(0);
  return arr.concat(arrCopy.reverse());
}

array = [1, 2, 3, 4, 5];
console.log(mirroredArray(array));
