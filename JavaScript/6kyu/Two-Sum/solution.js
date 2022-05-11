/*
 *
 *  Return the indexes of two elements from an array,
 *  that when added, equals to searched target.
 *
 */
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // Omit checking an element against itself.
      if (i !== j) {
        if (array[i] + array[j] === target) {
          return [i, j];
        }
      }
    }
  }
}