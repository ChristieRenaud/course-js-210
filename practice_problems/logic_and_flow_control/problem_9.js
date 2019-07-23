// input: password
// output: message
// algorothm: Set password. Display dialog box asking for password.
// if correct display success message
// if incorrect ask for password again.
// repeat until correct password or 3 attempts.

var password = '123';
var attempts = 0;

while (attempts < 3) {
  var user_password = prompt('Please enter your password');
  if (password !== user_password) {
    attempts++;
    continue;
  }
  console.log('You have successfully logged in.');
  break
}
if (attempts === 3) {
  console.log('You have been denied access.');
}
