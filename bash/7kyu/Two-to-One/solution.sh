#!/bin/bash

# Separate and sort distinct letters from two strings.

function longest {
  string=$1$2
  echo "$string" | grep -o . | sort | uniq | tr -d "\n"
}

longest "$1" "$2"

exit 0