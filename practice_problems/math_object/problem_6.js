

function randomInteger(min, max) {
  sorted_array = [min, max].sort(function(a, b) {return a - b});
  var randomInt = sorted_array[0] - 1;

  if (sorted_array[0] === sorted_array[1]) {
    return sorted_array[0];
  }
  while (randomInt < sorted_array[0]) {
    randomInt = Math.floor(sorted_array[1] * Math.random())
  }
  return randomInt;

}

console.log(randomInteger(10, 20));
console.log(randomInteger(50, 20));
console.log(randomInteger(20, 20));
