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
console.log(dateSuffix(1));
console.log(dateSuffix(22));
console.log(dateSuffix(11));
console.log(dateSuffix(30));
console.log(dateSuffix(18));
console.log(dateSuffix(23));
