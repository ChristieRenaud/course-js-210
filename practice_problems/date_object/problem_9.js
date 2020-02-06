var today = new Date();

console.log(today.getTime())

var tomorrow = new Date(today.getTime());
tomorrow.setDate(27)

console.log(tomorrow);
