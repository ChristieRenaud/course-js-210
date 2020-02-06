// input: an array
// output: removes the last element from the array and returns it
// algorithm: save the last element of the array to a variable
// remove the last item by changing the length. Return the variable.

function pop(array) {
  var lastItem = array[array.length - 1];
  array.length = array.length - 1;
  return lastItem;
}

var count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
