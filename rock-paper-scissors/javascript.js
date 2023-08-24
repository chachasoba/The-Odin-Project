let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

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

function playRound() {
  let win = null;
  const div = document.createElement('div');
  //to append message to DOM
  const body = document.querySelector('body');
  body.appendChild(div);

  computerSelection = getComputerChoice()

  if (playerSelection === computerSelection){
    div.textContent = "It's a draw!";
    
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    div.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    div.textContent =`You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    div.textContent =`You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  else {
    div.textContent =`You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
}

function playGame(){
  
  playRound();
  
  //div to hold winning message
  const div = document.createElement('div');
  //to append message to DOM
  const body = document.querySelector('body');
  body.appendChild(div);
  
  div.textContent = `player score: ${playerScore} 
                      computer score: ${computerScore}`;

  if (playerScore === 5){
    div.textContent = `You are the winner!`
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    div.textContent = `The computer won!`
    playerScore = 0;
    computerScore = 0;
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => 
  button.addEventListener('click', 
  ()=>{playerSelection = button.id;
       playGame();
  }))


