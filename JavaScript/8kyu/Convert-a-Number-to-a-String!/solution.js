/*
 *
 *  Type convertion.
 *
 *  Convert number to string.
 *  String representation of number returns that string.
 *  Non decimal numbers converts to decimal string representation.
 *
 */
function numberToString(num) {
  
  if (typeof num === 'string')
    return new RegExp('^[0-9.e]+$').test(num) ? num : 'Invalid number.';
  else if (typeof num === 'number')
    return num.toString(10);
  else
    return "Invalid number."
}