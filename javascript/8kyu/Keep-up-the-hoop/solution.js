/*
 *
 *  Try to encourage Alex.
 *
 */
function hoopCount(n) {
  if (typeof n != 'number')
    return 'Please type a valid number.';
  else
    return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
}