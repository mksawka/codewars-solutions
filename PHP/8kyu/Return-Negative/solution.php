<?php

/*
 *
 *  Return a negative of given number.
 *  If given number is already negative, return this number.
 *
 */
function makeNegative(float $number): float {
  if ($number == 0) return $number;
  return abs($number) * (-1);
}

?>