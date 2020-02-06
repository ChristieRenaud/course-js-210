// input: a string of text
// output:  the longest sentence from the text, along with the number of words in
// that text.
// criteria: Sentences begin with a word character and end with periods, exclamation
// points or question marks. Any sequence of characters that are not spaces or sentence-ending
// characters are counted as words.

// algorithm: Split the text into sentences starting with a word character and ending
// with . ! or ? . Count each word in each sentence and log the longest sentence and
 // the number of words in that sentence.

 var longText = 'Four score and seven years ago our fathers brought forth' +
 ' on this continent a new nation, conceived in liberty, and' +
 ' dedicated to the proposition that all men are created' +
 ' equal.' +
 ' Now we are engaged in a great civil war, testing whether' +
 ' that nation, or any nation so conceived and so dedicated,' +
 ' can long endure. We are met on a great battlefield of that' +
 ' war. We have come to dedicate a portion of that field, as' +
 ' a final resting place for those who here gave their lives' +
 ' that that nation might live. It is altogether fitting and' +
 ' proper that we should do this.' +
 ' But, in a larger sense, we can not dedicate, we can not' +
 ' consecrate, we can not hallow this ground. The brave' +
 ' men, living and dead, who struggled here, have' +
 ' consecrated it, far above our poor power to add or' +
 ' detract. The world will little note, nor long remember' +
 ' what we say here, but it can never forget what they' +
 ' did here. It is for us the living, rather, to be dedicated' +
 ' here to the unfinished work which they who fought' +
 ' here have thus far so nobly advanced. It is rather for' +
 ' us to be here dedicated to the great task remaining' +
 ' before us -- that from these honored dead we take' +
 ' increased devotion to that cause for which they gave' +
 ' the last full measure of devotion -- that we here highly' +
 ' resolve that these dead shall not have died in vain' +
 ' -- that this nation, under God, shall have a new birth' +
 ' of freedom -- and that government of the people, by' +
 ' the people, for the people, shall not perish from the' +
 ' earth.';

 var shorterText = 'Four score and seven years ago our fathers brought forth' +
 ' on this continent a new nation, conceived in liberty, and' +
 ' dedicated to the proposition that all men are created' +
 ' equal.' +
 'Four score and seven years ago our fathers brought forth' +
 ' on this continent a new nation, conceived in liberty, and' +
 ' dedicated to the proposition that all people are created' +
 ' equal.' +
 ' Now we are engaged in a great civil war, testing whether' +
 ' that nation, or any nation so conceived and so dedicated,' +
 ' can long endure. We are met on a great battlefield of that' +
 ' war. We have come to dedicate a portion of that field, as' +
 ' a final resting place for those who here gave their lives' +
 ' that that nation might live. It is altogether fitting and' +
 ' proper that we should do this.' +
 ' But, in a larger sense, we can not dedicate, we can not' +
 ' consecrate, we can not hallow this ground. The brave' +
 ' men, living and dead, who struggled here, have' +
 ' consecrated it, far above our poor power to add or' +
 ' detract. The world will little note, nor long remember' +
 ' what we say here, but it can never forget what they' +
 ' did here. It is for us the living, rather, to be dedicated' +
 ' here to the unfinished work which they who fought' +
 ' here have thus far so nobly advanced.';

function longestSentence(text) {
 var sentences = text.match(/\w[^.!?]*[.!?]/g)

 var longestSentences = sentences.sort(function (firstSentence, secondSentence) {
   return (countWords(secondSentence) - countWords(firstSentence));
 })
 var longestSentences = longestSentences.filter(function (sentence){
   return countWords(sentence) === countWords(longestSentences[0])
 });

 var wordCount = countWords(longestSentences[0])

 if (longestSentences.length === 1) {
   console.log(longestSentences[0])
   console.log('')
   console.log(`The longest sentence has ${wordCount} words.`)
 } else {
    console.log(`There are ${longestSentences.length} longest sentences with ${wordCount} words.`);
    console.log('');
    longestSentences.forEach(function (sentence) {
      console.log(sentence);
      console.log('');
    });
  };
}

function countWords(sentence) {
 return sentence.match(/[^\s.!?]+/g).length
}

longestSentence(longText);
longestSentence(shorterText);
