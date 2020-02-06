 // input: string
 // output: that strig with the first character of every word capitalized
 // algorithm: Split into words. transform array capitalizing first letter
 // of each word and downcasing the rest. join into a string.

function wordCap(string) {
  return string.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ')
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
