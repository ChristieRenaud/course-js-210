 // input:  a string
 // output:  an object containing the percentages of lowercase, uppercase, and neither
 // characters in the string as values
 // percentage: the number of characters that fit the property divided by the total
 // number of characters, multiplied by 100, rounded to 2 decimal places.
 // algorithm:
 // determine characters in string.
 // use a global regex match to return an array of all matches for a category
 // the value for each property is the arraylength/divided by the string length to the correct decimal pointed
//
function letterPercentages(string) {
  characterNumber = string.length
  lowercaseNumber = string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : 0;
  uppercaseNumber = string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0;
  neither = characterNumber - (lowercaseNumber + uppercaseNumber);
  return {
    lowercase: (lowercaseNumber/characterNumber * 100).toFixed(2),
    uppercase: (uppercaseNumber/characterNumber * 100).toFixed(2),
    neither: (neither/characterNumber * 100).toFixed(2),
  };
}


// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
