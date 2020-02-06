 // input: a string
 // output:  a string acronym containing the first letter of each word
 // capitalized with no spaces. Dashes count as spaces.
 // algorithm: Replace dashes with spaces. Split into an array. Change each word to
 // a capitalized first letter. Join the array.


function acronym(string) {
  return string.replace(/-/g, ' ').split(' ').map(function (word) {
    return word[0].toUpperCase()
  }).join('')
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
