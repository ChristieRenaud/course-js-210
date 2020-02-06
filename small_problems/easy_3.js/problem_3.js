 // input: 2 numbers, current age and retirement age
 // output:  A string containing current year, retirement year, and years until
 // retirement
 // algorithm: prompt for current age and retirement age. Subtract current age
 // from retirement age and save as yearsToWork. Create a date object for todays date
 // add years to work to get retirement year. convert date objects to year strings.


var currentAge = Number(prompt('What is your age?'));
var retirementAge = Number(prompt('At what age would you like to retire?'));
var yearsToWork = (retirementAge - currentAge);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var retirementYear = currentYear + yearsToWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToWork} years of work to go!`);
