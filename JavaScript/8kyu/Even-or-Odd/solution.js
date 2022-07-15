/*
 *
 *  Check if given number is even or odd.
 *
 */
function even_or_odd(number) {
  
  // Make sure argument is a number data type.
  if (typeof number !== 'number') return 'Invalid variable type.';
  
  return number % 2 == 0 ? 'Even' : 'Odd';
}