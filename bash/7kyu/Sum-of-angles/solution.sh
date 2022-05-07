# Find the total sum of internal angles in a n-sided simple polygon.

n=$1

if (( $# > 1 )); then echo "Run the script with only 1 parameter."; exit 1; fi;
if ! [[ $n =~ ^[0-9]+$ ]]; then echo "As a parameter give valid number of sides."; exit 1; fi;
if (( $n < 3 )); then echo "Polygon must have at least 3 sides."; exit 1; fi;

# Total sum of internal angles:
echo $(( ($n - 2) * 180 ))

exit 0