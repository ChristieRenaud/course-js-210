 // input:  a word and a string of text
 // output: an integer representing the number of times the word appears in the text.
 // algorithm: turn the word into a regex and match the regex with the text. return the
 // length of the array that is returned, or 0 if its null

function searchWord(word, text) {
  if (arguments.length < 2) {
    return 0
  }
  regex = new RegExp('\\b'+word+'\\b', 'ig')
  matches = text.match(regex)
  return matches === null ? 0 : matches.length;

}


 var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('sed', 'blah blah blah'));
console.log(searchWord('qui', text));      // should return 4, NOT 13
console.log(searchWord('qui'));
