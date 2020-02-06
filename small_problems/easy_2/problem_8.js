// input: 3 numbers
// output: a letter grade (string)
// rules: 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// algorithm: add the 3 numbers together and divide by 3. Check if the average
// is between the given scores and return the letter grade.

function getGrade(num1, num2, num3) {
  var average = (num1 + num2 + num3) / 3;

  if ((90 <= average) && (average <= 100)) {
    return 'A';
  } else if (80 <= average && average <= 89) {
    return 'B';
  } else if (70 <= average && average <= 79) {
    return 'C';
  } else if (60 <= average && average <= 69) {
    return 'D';
  } else {
    return 'F'
  }

}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(35, 20, 50));    // "D"
