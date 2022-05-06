#!/bin/bash

# Greet passengers coming aboard.
function say_hello {
  name=$1
  
  # The name should consist of letters,
  # whitespaces and optionally a dot.
  if [[ $name =~ ^[a-zA-Z./s]+[^0-9]+$ ]]
  then
    echo "Hello, $name"
  else
    echo "This isn't a real name!"
  fi
  
  return 0
}

say_hello "$1"

exit 0