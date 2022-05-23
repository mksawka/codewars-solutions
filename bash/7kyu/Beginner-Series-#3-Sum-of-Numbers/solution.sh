#!/bin/bash

# Find the sum of all integers in between given range.

startRange=$1
endRange=$2
sum=0

if (( $1 == $2 )); then echo $1; exit 0; fi

if (( $2 < $1 ))
then
  startRange=$2
  endRange=$1
fi

for i in `seq $startRange 1 $endRange`
do
  sum=$(( $sum + $i ))
done

echo $sum

exit 0