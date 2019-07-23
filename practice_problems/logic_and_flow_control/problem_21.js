// input: a string, a numerical start index and a numerical end index.
// input: a substring.
// problems to solve:
// 1. start and end are positive, start is less than end, both are within the
//    boundary of the string. Return: substring starting at the start index,
//    ending with the character before the end index. -solved
// 2. start value is greater than end. Swap the values and return the substring
//    same as number 1. -solved
// 3. Start value is equal to end. Return: an empty string. -solved
// 4. No end variable, end variable inside the function is undefined.
//    Return: substring starting at position start up through and including
//    the end of the string.
// 5. Start value or end value is less than 0 of NaN. Treat the value as 0
//    and return the substring same as number 1, 2 or 3 depending on the values.
// 6. Either start or end is greater than the length of the string. Treat it
//    as equal to the length of the string, then return the substring same as
//    number 1, 2 or 3 depending on the values.

// algorithm: solve #1 first. Loop through the string, start at start index,
// stop looping when the iterator is less than the end index. Add each
// character to a result string. Return the result string.
// Solve #2, if start is less then end,swap values. then proceed to
// original solution


function substring(string, start, end) {
  var i;
  var substring;
  var strLength = string.length;
  if (start > strLength) {
    start = strLength;
  }

  if (end > strLength) {
    end = strLength;
  }

  if (end === undefined) {
    end = strLength;
  }

  if ((start < 0) || isNaN(start)) {
    start = 0;
  }

  if ((end < 0) || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    var temp;

    temp = start;
    start = end;
    end = temp;
  }

  substring = "";
  for (i = start; i < end; i++) {
    substring += string[i];
  }
  return substring;
}


var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
