 // input: an array and a function
 // output: returns an array whose values are only those that the function
  // passed returns as true
 // algorithm: create a results array. loop through the given array and
 // pass each element to the given function. if it returns true add to the
 // results array. Return the results array at the end.

function myFilter(array, func) {
  var results = [];
  var i;
  for (i = 0; i < array.length; i++) {
    if (func(array[i])) {
      results.push(array[i]);
    }
  };

  return results;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
