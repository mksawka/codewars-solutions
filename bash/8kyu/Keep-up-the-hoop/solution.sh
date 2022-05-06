#!/bin/bash

# Try to encourage Alex.

# When script was invoke without any parameters.
if [[ -z $1 ]]
then
  echo 'No arguments passed.'
  exit 1
fi

# Argument passed must be a valid number.
# If argument match regex pattern, conditional test returns 0.
if [[ $1 =~ ^\d+ ]]
then
  echo 'Argument must be a valid number.'
  exit 1
fi

if (( $1 >= 10 ))
then
  echo 'Great, now move on to tricks'
else
  echo 'Keep at it until you get it'
fi

exit 0