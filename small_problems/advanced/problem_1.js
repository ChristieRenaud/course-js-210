 // input: a template
 // output:  returns a string of the template with randomized nouns, adjectives, etc.
 // plugged into it
 // rules:
 // the template has empty spots where a word from a specific part of speech is inserted.
 // the word is randomly generated from a list
 // data types: word lists: array; template: string
 // algorithm:
 // 1. create four arrays named nouns, adjectives, verbs, adverbs containing several
 // of each type of word.
 // 2. Create a string template with several spaces for a random word of a certain
 // type. The slots should be represented by a function that produces a random word
 // of the specified type.
 // 3. make a function that takes an array of words as input and outputs one of
 // the word elements chosed randomly. randomly generate an index starting with 0,
 // ending with the last index of the array. Use this index to return the corresonding
 // element of the array.

 var template1 = `The ${adjective} brown ${noun} ${adverb} ` +
 `${verb} the ${adjective} yellow ` +
 `${noun}, who ${adverb} ${verb} his ` +
 `${noun} and looks around.`

 var nouns = ['fox', 'head', 'leg', 'tail', 'cat'];
 var adverbs = ['happily', 'tiredly', 'fearfully', 'hurriedly'];
 var verbs = ['smiles', 'wiggles', 'barks', 'soars', 'thinks'];

function madlibs(template) {
  function random(array) {
    var i = Math.floor(Math.random() * (array.length - 1))
    return array[i];
  }

  var adjective = random(adjectives);
  var noun = random(nouns);
  var verb = random(verbs);
  var adverb = random(adverbs);

  console.log(template1)
}
var adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];






// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
