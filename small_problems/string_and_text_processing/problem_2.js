 // input: an array of strings
 // output: the array with all vowels removed.
 // algorithm: Transform the array by replacing the vowels in each string
 // with an empty array.



function removeVowels(array) {
  return array.map(function (string) {
    return string.replace(/[aeiou]/ig, '');
  })
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
