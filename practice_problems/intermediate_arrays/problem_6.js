// input: an array;
// output: a new array with duplicate elements removed;
// algorithm: loop through the array. Add first element to the new array;
// check if first 2 elements are equal, if yes skip, if not push second element
// to the array.


function uniqueElements(arr) {
  var elementToCheck = arr[0];
  var newArray = [arr[0]];
  var i;
  for (i = 1; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
