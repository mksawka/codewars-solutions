#!/bin/bash

# Repeat given string n times.

n=$1
string=$2

function repeatStr() {

  for i in $(seq $1)
  do
    echo -n $2
  done
  
  return 0
}

repeatStr $n $string

exit 0