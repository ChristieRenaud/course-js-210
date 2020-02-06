// input: a string
// output: logs to the console the string with a box around it.
// rules: top and bottom line is '+-' + string.length number of '-'s + '-+';
// second and fourth line is '|' + string.length + 2 ' ''s + '|';
// third line is '| ' + string + ' |';
// algorithm: log 5 strings to the console based on the rules.
// make a function that returns a number of a certain character or strings. charTimes(number, "string")
// use repeat()

function logInBox(string) {
  var stringLength = string.length;
  var horizontalRule = '+' + '-'.repeat(stringLength + 2) + '+';
  var emptyLine = '|' + ' '.repeat(stringLength + 2) + '|';
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log('| ' + string + ' |');
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// Further Exploration

function logInBox(string, boxWidth) {

  if (boxWidth !== undefined) {
    if (boxWidth < (string.length + 4)) {
      string = string.substr(0, boxWidth - 4);
    }
  }
  var horizontalRule = '+' + '-'.repeat(string.length + 2) + '+';
  var emptyLine = '|' + ' '.repeat(string.length + 2) + '|';
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log('| ' + string + ' |');
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 20);
logInBox('');
