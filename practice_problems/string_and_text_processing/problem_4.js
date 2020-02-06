 // input: a string with paretheses
 // output:  true or false depending on whether the strings are balanced.
 // they are balanced when '(' and ')' occur in matching pairs, with each pair starting with '('.
 // You can't have more ')'s than '('s at any time, and you must end with an equal number
 // of pairs.
 // algorithm: Loop through the string, Increment a counter once for opening p's,
 // decrement for closing p's. Return false if counter is negative.
function isBalanced(string) {
  var stringArray = string.split('')
  var i;
  var counter;
  for (i = 0, counter = 0; counter >= 0 && i <= stringArray.length; i++) {
     if (stringArray[i] === '(') {
      counter += 1;
    }
    if (stringArray[i] === ')') {
      counter -= 1;
    }
  }
  return counter === 0 ? true : false;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
