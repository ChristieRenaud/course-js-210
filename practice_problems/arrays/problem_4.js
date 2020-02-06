// input: value to search for, array to search;
// output: index of the first instance of a value. if none is found return -1.

function firstIndex(value, arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      break;
    } else if (i === arr.length - 1) {
      i = -1;
      break;
    }
  }
  return i;
}

things = [1, 2, 3, 4, 5]
console.log(firstIndex(2, things)); // 1
console.log(firstIndex(0, things)); // -1
console.log(firstIndex(5, things));// 4
