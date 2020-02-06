 // input: a string containing an email address
 // output:  true or false depending on whether it is a valid email address
// criteria: There must be one @ sign.
// THe local part must contain one or more letters, and/or digits. No other characters.
// The domain must contain 2 or more components with a single dot between each component,
// each component must contain one or more letters only.
 // algorithm: Check that there is one @ sign and split at that sign. Check first and
 // second parts separately.

 function isValidEmail(email) {
  if (!email.match(/@/g) || email.match(/@/g).length > 1) {
    return false;
  }
  var localPart = email.split(/@/)[0];
  var domain = email.split(/@/)[1];
  // if (localPart.match(/^[a-zA-Z\d]+$/g) === null) {
  //   return false;
  // }
  // if (domain.match(/^[a-zA-Z]+(\.[a-zA-Z]+)+$/g) === null) {
  //   return false;
  // }
  // return true;
  return !!localPart.match(/^[a-zA-Z\d]+$/g)
    && !!domain.match(/^[a-zA-Z]+(\.[a-zA-Z]+)+$/g);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
