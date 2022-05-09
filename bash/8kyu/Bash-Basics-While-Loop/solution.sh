#!/bin/bash

# Print out numbers from 1 to 20 using 'while' loop.

number=0

while true
do
  ((number++))
  if [[ $number -gt 20 ]]; then break; exit 0; fi
  echo "Count: $number"
done