/*
 *
 *  Return total number of goals.
 *
 *  Note: The input will always be valid.
 *
 */
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  /*
   *
   *  Sum up all given arguments.
   *
   */
  return Array.from(arguments).reduce( (previousValue, currentValue) => previousValue + currentValue);
}