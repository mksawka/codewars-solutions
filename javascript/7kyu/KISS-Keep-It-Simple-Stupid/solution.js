/*
 *
 *  Find out if Joe's work is simple or not.
 *
 *  Note: Input will be non empty strings with no punctuation.
 *
 */
function isKiss(string) {
  const words = string.split(' ');
  
  /*
   *
   *  We assume Joe likes to keep things simple
   *  on a daily basis.
   *
   */
  let isJoesWorkSimple = true;
  
  /*
   *
   *  But anyway we need to check his work,
   *  because everyone can have a bad day once a while.
   *
   */
  for (let word of words) {
    if (word.length > words.length) isJoesWorkSimple = false;
  }
  
  /*
   *
   *  So is it simple?
   *
   */
  return isJoesWorkSimple ? 'Good work Joe!' : 'Keep It Simple Stupid';
}