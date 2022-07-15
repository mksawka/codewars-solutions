/*
 *
 *  Convert boolean to strings 'Yes' or 'No'.
 *
 */
function boolToWord(value) {
  
  // Validate input.
  if (typeof value !== 'boolean') return 'Not type of boolean.';
  
  return value ? 'Yes' : 'No';
}