function runningTotal(array) {
  var resultArray = [];
  var sum = 0;
  var i;

  resultArray = array.map(function(elem) {
    return (sum += elem)
  })
// or
//resultArray = array.map(elem => sum += elem)


  return resultArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
