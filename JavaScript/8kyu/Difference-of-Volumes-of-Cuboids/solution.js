/*
 *
 *  Find the difference in volumes of two cuboids of given dimensions.
 *
 *  If only one cuboid dimensions are passed, function will return volume of this cuboid.
 *  If no arguments are passed, function returns 0.
 *
 *  Expected valid input only.
 *
 */
function findDifference(cuboidA = [0, 0, 0], cuboidB = [0, 0, 0]) {
  const calcVolume = dimensions => dimensions.reduce((previousVal, currentVal) => previousVal * currentVal, 1);
  
  return Math.abs(calcVolume(cuboidA) - calcVolume(cuboidB));
}