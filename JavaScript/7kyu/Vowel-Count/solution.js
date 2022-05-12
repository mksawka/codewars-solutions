/*
 *
 *  Return the number of vowels in given string.
 *
 */
function getCount(string) {
  if (typeof string !== 'string') return 'Invalid string.';
  
  const vowels = /[aeiouAEIOU]/g;
  const found = string.match(vowels);
  
  return found ? found.length : 0;
}