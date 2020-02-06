function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log(`Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}`)
}

var daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(dateAsInteger) {
  var suffix = ''
  if (dateAsInteger >= 11 && dateAsInteger <= 19) {
    suffix = 'th' } else if (dateAsInteger % 10 === 1) {
      suffix = 'st'} else if (dateAsInteger % 10 === 2) {
        suffix = 'nd'} else if (dateAsInteger % 10 === 3) {
          suffix = 'rd'} else {
            suffix = 'th'
          }
  return String(dateAsInteger) + suffix
}

function formattedMonth(date) {
  return months[date.getMonth()];
}

function formattedDay(date) {
  return daysOfTheWeek[date.getDay()];
}
var today = new Date();
formattedDate(today)

console.log(today.getYear());
console.log(today.getFullYear());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

formattedDate(tomorrow);

var nextWeek = new Date(today.getTime());
console.log(nextWeek === today);
console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
formattedDate(nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());
  if (minutes.length === 1) { minutes = '0' + minutes }
  if (hours.length === 1) { hours = '0' + hours }
  console.log(`${hours}:${minutes}`)
}
formatTime(new Date(2013, 2, 1, 1, 10));
