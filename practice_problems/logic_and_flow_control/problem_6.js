// input: numbers 1 to 100
// output: logs 'fizz' if the number is a multiple of 3, log 'buzz' if the number is a multiple
// of 5; logs 'fizzbuzz' if it's a multiple of 3 and 5. If none, log the number.
// Algorithm: Loop through numbers 1 to 100. Check if its a multiple of 3, 5,
// both or none and log the result.

function fizzbuzz() {
    var i;
    for (i = 1; i <= 100; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  };

fizzbuzz();
