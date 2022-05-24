#!/bin/bash

# Return given positive integer up to 5 digits
# as a 5 digits number with leading zeroes.

if ! [[ $1 =~ ^[0-9]+$ ]]; then echo "Argument must be a positive integer up to 5 digits."; exit 1; fi
if (( $1 > 99999 )); then echo "Only integers up to 5 digits allowed."; exit 1; fi

printf "Value is %05d", $1

exit 0