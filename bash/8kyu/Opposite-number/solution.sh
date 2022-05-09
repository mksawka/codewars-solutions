#!/bin/bash

# Return the opposite of given number.
# Integers and floating points acceptable.

number=$1

if [[ $number =~ ^[0-9.-]+$ ]]
then
  [[ $number != 0 ]] |bc && echo $number * -1 |bc || echo $number
else
  echo "Invalid number."
  exit 1
fi

exit 0