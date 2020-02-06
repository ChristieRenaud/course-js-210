 // input:  an array of elements can be numbers, strings, objects, arrays
 // output:  a new array with the first element of the original array moved to the end of the array,
 // and the other elements moved forward. If the input is not an array,return undefined.
 // If the input is an empty array, return an empty array.
 // algorithm:
 // - check for invalid input and return undefined if necessary.
 // - create a results array.
 // - make the new array equal to slice the array sliced from the second element
 // to the end, and concat the first element of the array to the end.
 // - return the results array.

function rotateArray(array) {
  var results = []
  if (!Array.isArray(array)) {return undefined};
  if (array[0] !== undefined) {
    results = array.slice(1).concat(array[0]);
  }
  return results;
}

// test cases
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray('a'));                      // undefined
