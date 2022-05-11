/*
 *
 *  With given two interior angles of a triangle,
 *  calculate value of 3rd angle of this triangle.
 *
 *  Note: Only positive integers will be passed as arguments.
 *
 */
function otherAngle(firstAngle, secondAngle) {
  /*
   *
   *  Sum of all interior angles in a triangle
   *  must be equal to 180 degrees.
   *
   */
  const thirdAngle = 180 - firstAngle - secondAngle;
  return thirdAngle;
}