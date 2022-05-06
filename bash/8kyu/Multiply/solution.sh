#!/bin/bash

# Multiply two given numbers.
# Integers and floating point allowed.
[[ $1 && $2 =~ ^[0-9]+$ ]] && echo $1 * $2 |bc || echo "Invalid number(s)."