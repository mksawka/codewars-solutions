#!/bin/bash

# Jenny's improved code.

function greet_user() {
  if [[ $1 == "Johnny" ]]; then echo "Hello. my Love!"; exit 0; fi
  echo "Hello, $1!"
}

greet_user "$1"

exit 0