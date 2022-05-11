/*
 *
 *  Return a binary string of alternating 1s and 0s,
 *  of given length (size).
 *
 */
function stringy(size) {
  let string = '';
  
  for (let i = 0; i < size; i++) {
    
    /*
     *
     *  On first iteration, undefined != '1',
     *  so a new string will always start with '1'.
     *
     */
    if (string[i-1] === '1')
      string += '0';
    else
      string += '1';
  } 
  
  return string;
}