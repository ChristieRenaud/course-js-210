// input: an array with 2 or more elements which produce a person's
// name when combined and an object which contains two keys, title and occupation
// with suitable greetings
// output: logs a greeting to the console that uses the person's full name and
// mentions the title and occupation
// algorithm: create the name string by joining the elements of the array
// Use the title and occupation keys to access those values and include them
// into the greeting string
function greetings(nameArray, job) {
  var fullName = nameArray.join(" ")
  var greetingString = `Hello, ${fullName}! Wow! You are a \
${job.title} ${job.occupation}!`;
  console.log(greetingString);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
// Solution
