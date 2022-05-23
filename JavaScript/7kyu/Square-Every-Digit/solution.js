/*
 *
 *  Square every digit of a number and concatenate them,
 *  forming new number.
 *
 */
function squareDigits(num) {
  if (typeof num !== 'number') return 'Parameter must be a number.';
	
  return Number(Array.from(String(num)).map(el => el * el).join(''));
}