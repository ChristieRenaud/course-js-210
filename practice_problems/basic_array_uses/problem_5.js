function firstNOf(arr, count) {
    return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

function lastNOf(arr, count) {
  return arr.slice(arr.length - count)
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 15));    // returns [16, 23, 42]

function lastNOf(arr, count) {
  var index = arr.length - count;
  if (index < 0) {
    index = 0;
  }
  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 15));
