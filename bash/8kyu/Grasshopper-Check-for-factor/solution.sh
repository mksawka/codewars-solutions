#!/bin/bash

# Test if given factor is in fact a factor of given base.
# Note: Base is a non-negative number, factor is a positive number.

base=$1
factor=$2

if (( $base % $factor == 0 ))
then
  echo 'true'
else
  echo 'false'
fi

exit 0