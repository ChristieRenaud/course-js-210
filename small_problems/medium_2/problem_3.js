 // input: 3 integers representing the angles of a triangle
 // output:  a string telling whether the triangle is acute, right, obtuse, or invalid
 // rules:
 // to be valid, a the sum of the angles must be exactly 180 degrees, and every angle
 // is greater than 0.
 // right: one angle is 90 degrees
 // acute: all 3 angles less than 90
 // obtuse: one angle is greater than 90 degrees.
 // algorithm:
 // 1. determine if triangle is valid. Return invalid if not.
 //   - check if the sum of the angles is 180 and all angles are greater than 0
 // 2. check if one angle is 90 degrees.
 //   - If max value equals 90, return right
 // 3. check if one angle is greater than 90
 //   - Determine max value and if it is greater than 90, return obtuse
 // 4. if the triangle is valid but does not meet these criteria return acute

function triangle(angleA, angleB, angleC) {
  var angles = [angleA, angleB, angleC];
  if (!isValid(angles)) {
    return 'invalid';
  };

  var maxAngleValue = Math.max(angleA, angleB, angleC);

  if (maxAngleValue === 90) {
    return 'right';
  }

  if (maxAngleValue > 90) {
    return 'obtuse';
  }

  return 'acute'
}

function isValid(angles) {
  var allNonZero = angles.every(function (angle) {
    return angle > 0;
  });
  return (angles[0] + angles[1] + angles[2] === 180) && allNonZero;

}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
