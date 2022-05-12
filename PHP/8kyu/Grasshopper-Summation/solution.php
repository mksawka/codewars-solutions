<?php

/*
 *
 *  Calculate the sum of n consecutive natural numbers.
 *
 */
function summation(int $n): int {
  $n = abs($n);
  return $n * ($n + 1) / 2;
}

?>