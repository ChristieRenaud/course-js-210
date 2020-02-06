 // input: a word and an array of words
 // output:  all words from the array that are anagrams of the  first word
 // algorithm: iterate through the list. check if the word and the element from
 // the list are anagrams. To check if the words are anagrams, spllt both into
 // arrays and sort. Then compare that they contain the same letters and have the
 // same number of characters.


function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.split('').sort()
  var targetLetters = target.split('').sort()
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    return array1.every(function (element, index) {
      return element === array2[index];
    });
  };
}

console.log(compareArrays(['enlist', 'google', 'inlets', 'banana'], ['enlists', 'google', 'inlets', 'banana']));
console.log(compareArrays(['enlist', 'google', 'inlets', 'banana'], ['enlist', 'google', 'inlets', 'banana']));


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
