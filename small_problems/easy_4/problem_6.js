 // input:  array of integers.
 // output:  a string of the entries multiplied together, divided by the number
 // of entries, and rounded to three decimal places.
 // algorithm: iterate through and multiply together, divide, round to 3, return as string

function showMultiplicativeAverage(integers) {
  var i;
  var product = 1;
  var length = integers.length;

  for (i = 0; i < length; i++) {
    product *= integers[i];
  }

  return (product/length).toFixed(3);
}

 console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
 console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
