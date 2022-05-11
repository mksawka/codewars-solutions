/*
 *
 *  Calculate how many litres of water will
 *  Nathan drink in given time of cycling,
 *  knowing he drinks 0.5 l/h.
 *
 */
function litres(time) {
  const LITRES_PER_HOUR = 0.5;
  return typeof time != 'number' ? 'Invalid time.' : Math.floor(time * LITRES_PER_HOUR);
}