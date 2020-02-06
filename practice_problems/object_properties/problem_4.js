// input: a single string
// output: returns an object with each unique word as a key and the number
// of times it appears in the string as the value.
//algorithm: separate into strings in an array. Loop through the array,
// create a new object. If the word doesn't appear in the object, save it
// as a property key and set to one. if it does appear, increment by 1.
// Return the new object.

function wordCount(string) {
  string_array = string.split(' ')
  var count = {};
  var i;
  for (i in string_array) {
    if (!count[string_array[i]]) {
      count[string_array[i]] = 1;
    } else {
      count[string_array[i]] += 1;
    }
  }
  return count;
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
