/*
 *
 *  Sum up all positive numbers from given array of numbers.
 *
 */
function positiveSum(numbers) {
  return numbers.filter(value => value > 0).reduce((prev, curr) => prev + curr, 0);
}