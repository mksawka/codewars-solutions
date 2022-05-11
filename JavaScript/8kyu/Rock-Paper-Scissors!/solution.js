/*
 *
 *  Rock, paper, scissors.
 *
 */
function rps(player1, player2) {

  /*
   *
   *  Function input validation.
   *
   */
  if (arguments.length != 2) return 'Function must take only 2 arguments.';
  
  for (const arg of arguments) {
    if (!arg.includes('rock') && !arg.includes('paper') && !arg.includes('scissors'))
      return 'Invalid arguments passed to the function.';
  }

  
  /*
   *
   *  When both players pick the same it's draw.
   *
   */
  if (player1 === player2) return 'Draw!';
  
  /*
   *
   *  Player1 has won the game when one of below possibile
   *  combination is taking place.
   *
   */
  if (player1 === 'rock' && player2 === 'scissors') return 'Player 1 won!';
  if (player1 === 'scissors' && player2 === 'paper') return 'Player 1 won!';
  if (player1 === 'paper' && player2 === 'rock') return 'Player 1 won!';
  
  /*
   *
   *  When none of above combination happend,
   *  it means player2 has won the game instead.
   *
   */
  return 'Player 2 won!';
};