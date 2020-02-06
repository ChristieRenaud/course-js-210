 // input: a string
 // output:  a string with every other letter capitalized, ignoring non-alphabetic
 // characters when determining appropriate case.
 // algorithm: split into an array. Transform each character. Keep track of a counter, increment
 // it when a character is made uppercase or lowercase, not when it stays the same. Make the char
  // uppercase if the counter is odd, lowercase if its even.


function staggeredCase(string) {
  var counter = 0;
  return string.split('').map(function (char) {
    if (!/[a-z]/i.test(char)) {
      return char
    } else if (counter % 2 === 0) {
      counter += 1;
      return char.toUpperCase();
    } else {
      counter += 1;
      return char.toLowerCase();
    }
  }).join('');
}

// alt solution

function staggeredCase(string) {
  var counter = 0;
  return string.split('').map(function (char) {
    if (!/[a-z]/i.test(char)) {
      return char;
    } else {
      counter += 1;
    }
    if (counter % 2 === 0) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
