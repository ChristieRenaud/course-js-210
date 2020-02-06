 // input:
 // output:
 // algorithm:

function swapName(fullName) {
  var nameArray = fullName.split(' ');
  return nameArray[1] + ', ' + nameArray[0];
}

function swapName(fullName) {
  var nameArray = fullName.split(' ');
  var lastNameFirst;
  var i;
  lastNameFirst = nameArray[nameArray.length - 1] + ', '
  for (i = 0; i < nameArray.length - 1; i++) {
    lastNameFirst += nameArray[i] + ' ';
  }
  return lastNameFirst.trim();

}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Mary Lou Jones'))
