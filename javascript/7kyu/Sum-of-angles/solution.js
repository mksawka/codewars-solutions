/*
 *
 *  Find the total sum of internal angles in a n-sided simple polygon.
 *
 */
function angle(n) {
  
  if (n < 3) return 'Polygon must have at least 3 sides.';
  return (n - 2) * 180;
}