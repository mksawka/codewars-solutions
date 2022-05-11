<?php

/*
 *
 *  Returns 'Yes' or 'No' depending on given boolean value.
 *
 */
function boolToWord($value): string {
  if (!is_bool($value)) return 'Argument is not of type boolean.';
  return $value ? 'Yes' : 'No';
}

?>