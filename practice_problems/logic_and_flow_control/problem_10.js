// input: 3 integers
// output: A message to the console containing average of 3 integers.
// algorithm: Prompt to get 3 scores. Add the scores together and divide by 3 to
// find the average. Compare average against the rules to determine grade.
// Log the answer.
// Rules: If the average score is greater than or equal to 90 then the grade is 'A'
// If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
// If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
// If the average score is less than 50 then the grade is 'F'

var guess1 = Number(prompt("Enter score 1:"));
var guess2 = Number(prompt("Enter score 2:"));
var guess3 = Number(prompt("Enter score 3:"));
var grade
var averageScore = (guess1 + guess2 + guess3) / 3;


if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores, your letter grade is "${grade}".`)
