 // input: an array
 // output: log the occurrences of each element in the array
 // algorithm: create an object. Loop through the array creating keys from
 //  the elements and keeping track of how many times they occur. Then loop
 // through the object and print out a sting containing key '=>' value

function countOccurrences(elements) {
  var count = {};
  var element;
  var i;
  for (i = 0; i < elements.length; i++) {
    count[elements[i]] = count[elements[i]] || 0;
    count[elements[i]] += 1;
  }
  var keys = Object.keys(count)
  var j;
  for (j = 0; j < keys.length; j++) {
    console.log(keys[j] + ' => ' + count[keys[j]])
  }

}



 var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
