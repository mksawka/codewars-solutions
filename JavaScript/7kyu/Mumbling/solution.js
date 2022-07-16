/*
 *
 *  Accumulate chars from string in certain way.
 *
 */
function accum(string) {
  let accumulated = '';
  
  for (let i = 0; i < string.length; i++) {
    
    // Repeat char n + 1 times depending on position it has in the string.
    let section = string[i].toLowerCase().repeat(i + 1);
    
    // Make first char uppercase.
    section = section.charAt(0).toUpperCase() + section.slice(1);
    
    if (i < string.length - 1) section += '-';
    
    accumulated += section;
  }
  
  return accumulated;
}