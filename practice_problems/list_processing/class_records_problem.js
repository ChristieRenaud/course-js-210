 // input:  a studentScores object thqt contains 1 or more student objects
 // which each contain an id and a scores property. The scores property contains
 // an exams key that has an array of numbers as its value, and an exercises key that
 // has an array of scores for its value.
 // output:  a class record summary object with an array of student grades (strings with
// the numerical score and grade), and the exams key that has an array as its value.
// this array contains objects with average, minimum, and maximum as keys,
// with numbers as values
 // algorithm:
  // 1. create the student grades array:
//        add all exams scores and divide by 4 (reduce)
//        add all exercises (reduce)
//        multiply exams by .65 and the exercises by .35 and add together
//        round to the nearest integer
//        look up in the table and determine grade (map)
//        return string with letter grade and percent grade
//
// 2. create exams array
//        add each exam score together and divide by number of objects
//        compare all the exam scores and for the respective
//        exam and find the highest (reduce)
//        compare all the exam scores for the respective
//        exam and find the lowest (reduce)


function generateClassRecordSummary(scores) {
 // an array of score objects, with both exams and exercises
 var scoreData = Object.keys(scores).map(function (student) {
   return scores[student].scores;
 });

 // transform the above score objects into an array of arrays for exam scores
 var examData = scoreData.map(function (score) {
   return score.exams;
 });

 return {
   studentGrades: scoreData.map(function (scoreObj) {
     return getStudentScore(scoreObj);
   }),
   exams: getExamSummary(examData),
 };
}

function findSum(sum, score) {
  return sum + score;
}

function getStudentScore(scoreObj) {

  var studentExamAverage = scoreObj.exams.reduce(findSum)/scoreObj.exams.length;

  var studentExerciseTotal = scoreObj.exercises.reduce(findSum);

  function getStudentNumericalScore(scoreObj) {
    return (studentExamAverage * .65 + studentExerciseTotal * .35).toFixed();
  }

  var numericalScore = getStudentNumericalScore(scoreObj)
  function getLetterGrade(numericalScore) {
    if (numericalScore >= 93) {
      return 'A';
    } else if (numericalScore >= 85) {
      return 'B';
    } else if (numericalScore >= 77) {
      return 'C';
    } else if (numericalScore >= 69) {
      return 'D';
    } else if (numericalScore >= 60) {
      return 'E';
    } else {
      return 'F';
    };
  }

  return `${numericalScore}, \(${getLetterGrade(numericalScore)}\)`;
}

function getExamSummary(examData) {

  function getExamAverage(eachExam) {
    return eachExam.reduce(findSum)/eachExam.length;
  }

  // function getExamMaximum(examData) {
  //   return examData.reduce( function (firstScore, secondScore) {
  //     if (firstScore >= secondScore) {
  //       return firstScore;
  //     } else {
  //       return secondScore;
  //     }
  //   });
  // }

  // function getExamMinimum(examData) {
  //   return examData.reduce( function (firstScore, secondScore) {
  //     if (firstScore <= secondScore) {
  //       return firstScore;
  //     } else {
  //       return secondScore;
  //     }
  //   });
  // }
  function getExamMaximum(eachExam) {
    return Math.max(...eachExam);
  }

  function getExamMinimum(eachExam) {
    return Math.min(...eachExam);
  }

  //creating new Array consisting of arrays of scores from each test
  var examDataByTest = [];

  examData.forEach( function (array, index) {
    array.forEach(function (element, elementIndex) {
      if (examDataByTest[elementIndex] === undefined) {
        examDataByTest[elementIndex] = [];
      };
      examDataByTest[elementIndex].push(element);
    });
  });

  return examDataByTest.map( function (examScores) {
    return {
      average: getExamAverage(examScores),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores),
    };
  });
}
////////////////////////
 var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};



console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
