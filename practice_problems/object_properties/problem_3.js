// input: 2 object
// output: number of properties copied
// algorithm: loop through the first array. add the properties and values
// from the first array to the second. keep track of how many iterations, or use
// object.keys(object).length to find the length of the first object



function copyProperties(object1, object2) {
  var object;
  var i = 0;
  for (object in object1) {
    object2[object] = object1[object];
    i++;
  }
  return i;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
