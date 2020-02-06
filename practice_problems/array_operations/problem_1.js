// input: an array and any other value
// output: append 2nd argument to the array and return the new length of the
// array. The original array is mutated.
// algorithm: add the element to the end of the array using bracket notation
// and finding the arrays length. return the new length.

function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

var count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
