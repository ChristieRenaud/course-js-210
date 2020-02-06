 // input: a multidimensional array with each inner array consisting of a fruit
  // and a number (n)
 // output:  a flat array with each fruit listed n times.
 // algorithm: transform each inner array to an array of the fruit listed n times.
 // combine the arrays.

function buyFruit(fruitList) {
 return fruitList.flatMap(function(individualList) {
   var fruit = individualList[0];
   var number = individualList[1];
   return repeatString(fruit, number);
 });
}

function repeatString(string, number) {
  array = [];
  var i;
  for (i = 0; i < number; i++) {
    array.push(string);
  }
  return array;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
