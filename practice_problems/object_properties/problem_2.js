// input: 2 arguments: an Object and a string.
// output: returns the new value of the property. if the Object contains a property
// with the second arguments name, the function should increment the value
// of that property. If the property doesn't exist, the function should add
// a new property with a value of 1.
// algorithm: check if the object contains the property, use bracket notation
// to increment the value or add the property with a value of 1.

function incrementProperty(object, property) {
  var keys = Object.keys(object);
  if (keys.indexOf(property) !== -1) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }
  return object[property];

}


var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
