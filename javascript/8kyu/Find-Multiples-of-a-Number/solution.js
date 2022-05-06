/*
 *
 *  Return a list of integer multiples up to specified limit.
 *
 *  Arguments passed to a function will always satisfy the conditions:
 *    integer > 0 && integer !== 0
 *    limit > integer
 * 
 *  No need to handling these exceptions.
 *
 */
function findMultiples(integer, limit) {
  
  let base = 0;
  const multiples = [];
  
  while (true) {
    base += integer;
    if (base > limit) break;
    multiples.push(base);
  }
  
  return multiples;
}