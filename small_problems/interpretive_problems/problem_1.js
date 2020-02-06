 // input: an integer n representing the number of lights
 // output:  an array of numbers representing which lights are on after n rounds
 // of toggling the lights.
 // requirements:
 // - There are n switches
 // - there are n rounds of toggling lights
 // - all switches start at the off position
 // - the numbering starts at 1 and ends at n
 // - the first round all switches are toggled to on
 // - on the second round all switches which are a multiple of 2 are toggled.
 // - on the third round all switches which are a multiple of 3 are toggled.
 // - this is repeated until n is reached and all switches that are a multiple
 // - of n are toggled.
 // - the numbers of the switches that are in an on position are returned in an array.
 // - the switches on at the end are the squares of the integers starting at 1, and ending
// with the square that is <= n
// data type: an array, with 0 at index 0 so switch numbers and indexes are the same. Values
// would be true/false.
// an object with numbers as keys and true/false as values.
 // algorithm:
 // initialize an array with n+1 elements that are all false
 // create a loop that starts at 1 and ends when the index is equal to n
// Iterate through the array starting at 1 and ending at n. Change the value of each index that
// is a multiple of n to the opposite of its previous value.
// map the index number of each array element that is positive.
// filter the numbers to remove all 0's.

// map the array returning the indexOf true values. Remove the values === -1
 function lightsOn(switches) {
  var lights = [];
  var i;
  for (i = 0; i <= switches; i++) {
    lights.push(false);
  }
  var j;
  var k;
  for (j = 1; j <= switches; j += 1) {
    for (k = j; k <= switches; k = k + j) {
      lights[k] = !lights[k]
    }
  }
  return lights.map(function (value, index) {
    return value ? index : value;
  }).filter(function(value) {
    return value;
  });
}

// function multipleOf(number1, number2) {
//   return number2 % number1 === 0
// }
//
// function toggleLight(light) {
//   if (light === true) {
//     return false;
//   } else {
//     return true;
//   }
// }
// test cases
console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]
console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(85));  // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(lightsOn(500)); // [1, 4, 9, ... 484]
