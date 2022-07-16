/*
 *
 *  Sum up all positive numbers from given array of numbers.
 *
 */
function positiveSum(numbers) {
  const hasOnlyNumbers = numbers.every(num => typeof num === 'number');
  
  if (!hasOnlyNumbers) return 'Array must include only numbers.';
  return numbers.filter(value => value > 0).reduce((prev, curr) => prev + curr, 0);
}