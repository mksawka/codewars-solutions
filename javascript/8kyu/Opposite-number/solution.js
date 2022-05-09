/*
 *
 *  Return the opposite of given value (number).
 *
 */
function opposite(value) {
  if (typeof value !== 'number') return 'Invalid number.';
  return value !== 0 ? value * (-1) : value;
}