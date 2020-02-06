 // input: an array of objects
 // output:  a new array with altered values
 // algorithm: map changes from the current array to a new array. On each iteration
 // create a new object with name, country, and active, modifying each value as
 // necessary.


 var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map( function (band) {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band
  });
}

function updateCountry(band) {
  band.country = 'Canada'
}

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(capitalizeFirstLetter).join(' ')
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '')
}
console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
