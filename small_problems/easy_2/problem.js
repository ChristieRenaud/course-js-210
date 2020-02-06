// input: string representing noun, verb, adverb, adjective
// output: outputs a string with entered noun, etc. interpolated.
// algorithm: prompt for parts of speech. save to variables. log a string with
// the variables interpolated.

var noun = prompt('Enter a noun:');
var verb = prompt('Enter a verb:');
var adjective = prompt('Enter and adjective:');
var adverb = prompt('Enter an adverb:');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)
