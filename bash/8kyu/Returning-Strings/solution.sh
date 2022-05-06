#!/bin/bash

# Simply greet the user by given name.

function greet {
  user_name=$1
 
  [[ $user_name =~ ^[a-zA-Z]+$ ]] && echo "Hello, $user_name how are you doing today?" || \
  echo "Name should consist of letters only."

  return 0
}

greet $1

exit 0