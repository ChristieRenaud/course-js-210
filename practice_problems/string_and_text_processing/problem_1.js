 // input: a string
 // output:  a new string that contains the original string in reverse
 // algorithm: split into an array. Use array reverse. join.


 function reverse(string) {
   return string.split('').reverse().join('');
 }

 console.log(reverse('hello'));                  // returns "olleh"
 console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
