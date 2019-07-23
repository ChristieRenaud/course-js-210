// 1
function averageThree(a, b, c) {
  return (a + b + c) / 3;
}

console.log(averageThree(2, 5, 10));

//2

function sum(a, b, c) {
  return (a + b + c);
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average(2, 5, 8));

// 3


function average(values) {
  var total = 0;
  for (var i = 0, length = values.length; i < length; i += 1) {
    total += values[i];
  }
  return total / length;
}

console.log(average([1, 2, 3, 4, 5]));

// 4

function sum(values) {
  var total = 0;
  for (var i = 0, length = values.length; i < length; i += 1) {
    total += values[i];
  }
  return total;
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([1, 5, 7, 9, 11]));

// 5
var temperatures = [77, 85, 91, 72, 76];
console.log(average(temperatures));

var name = "Sam"
function greet() {
  console.log(name);
}

greet();
