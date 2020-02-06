 // input: an array of arrays. Each inner array represents a height and a width of a rectangle
 // output:  the area of all the rectangles added up.
 // algorithm: map ..the product of each array to a new array. Reduce to the sum of the
 // elements of the array.


var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangle_array) {
  var areas = rectangle_array.map(function (element) {
    return element[0] * element[1];
  });
  return areas.reduce( function (sum, area) {
    return sum + area;
  });
}

console.log(totalArea(rectangles));    // 141

 // input: an array of arrays or rectangle sides
 // output:  The sum or the areas of only the squares, those with equal length and width.
 // algorithm: Filter the array to keep only arrays where both numbers are the same. Then find
 // the total area of that array.


 var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

 function totalSquareArea(rectangles) {
   var squares = rectangles.filter(function (rectangle) {
     return rectangle[0] === rectangle[1];
   });
   return totalArea(squares);
 }

console.log(totalSquareArea(rectangles));    // 121
