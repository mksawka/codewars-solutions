#!/bin/bash

# Determine whether given integer is an odd or even number.

integer=$1

# When too many args were passed to script.
if [[ $# > 1 ]]
then
  echo "Script takes only one argument."
  exit 1
fi

# When passed argument is not a valid integer.
valid_integer="^[+-]?[0-9]+$"
if ! [[ $integer =~ $valid_integer ]]
then
  echo "This is not a valid integer."
  exit 1
fi

(( $integer % 2 == 0 )) && echo "Even" || echo "Odd"

exit 0