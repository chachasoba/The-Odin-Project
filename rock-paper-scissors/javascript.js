function getComputerChoice() {
  let randomNum = Math.ceil(Math.random() * 3);
  switch(randomNum) {
    case 1: 
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}
function getPlayerSelection() {
  let playerSelection = prompt('Enter paper, rock or scissors');
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let win = null;

  if (playerSelection === computerSelection){
    console.log("It's a draw!");
    win = false;
    return win;
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    win = true;
    return win;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    win = true;
    return win;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    win = true;
    return win;
  }
  else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    win = false;
    return win;
  }
}

function game(){
  let score = 0;
  for (let i=0; i<5; i++){
    let win = playRound(getPlayerSelection(), getComputerChoice());
    if (win === true) {
      score++;
    }
  }
  if (score >= 3){
    console.log('You are the winner!')
  }
  else{
    console.log('The computer won!')
  }
}

game();

