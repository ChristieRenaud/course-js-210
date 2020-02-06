// input : radians
// output : conversion to degrees
// rules: 1 radian is equal to 57.2958 degrees
// pi is the ratio of the circumference of the circle to its diameter
// 1 radian is equal to 180 degrees / PI

function convertToDegrees(radians) {
  return radians * 180 / Math.PI
}

console.log(convertToDegrees(1)); // 57.2958
console.log(convertToDegrees(5)); // 57.2958 * 5
console.log(convertToDegrees(10));
