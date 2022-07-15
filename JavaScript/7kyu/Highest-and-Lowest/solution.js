/*
 *
 *  Return highest and lowest value from given string of numbers.
 *
 */
function highAndLow(numbers) {
  
  // Create a sorted array of number types from input string.
  const values = numbers.split(' ').map(Number).sort((a, b) => a - b);
  
  return `${values[values.length - 1]} ${values[0]}`;
}