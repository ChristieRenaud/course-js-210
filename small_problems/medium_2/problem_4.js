 // input: a year
 // output:   the number of friday the 13ths in that year.

 // loop through all 12 months of the year and count how many times the the 13th
// day of the month is a friday.
 // algorithm:
 // 1. create a count variable set to 0
 // 2.iterate through the months of the year, start with 0, go to 11
 // 3.get the day of the month that falls on the 13th.
 // 4.increment the count for each friday.
 // 5.return the count

function fridayThe13ths(year) {
  var date = new Date(year, 0, 13);
  var count = 0;
  var i;
  for (i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

// Examples
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
