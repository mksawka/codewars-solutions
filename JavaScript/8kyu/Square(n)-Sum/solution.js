/*
 *
 *  Square every number in an array and return their sum.
 *
 */
function squareSum(nums) {
  if (!Array.isArray(nums)) return 'Pass an array as argument.';
  if (!nums.every(el => typeof el === 'number')) return 'Array must have only numbers.';
   
  return nums.reduce((sum, curr) => sum + curr ** 2, 0);
}