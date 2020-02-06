 // input:  an array of numbers
 // output:  the result of the sum of the sums of each leading subsequence for that array
 // algorithm: loop through the array. For each iteration the accumulator is the value +
 // the element * the arrayLength

function sumOfSums(numberArray) {
  return numberArray.reduce(function (total, number, index, array) {
    return total + (number * (array.length - index));
  }, 0);
}

function sumOfSums(numberArray) {
  return numberArray.reduce(function (total, number, index, array) {
    return total + number + array[index+1];
  });
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
