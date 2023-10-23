const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const ties = document.querySelector('#ties');

const playerMoveContainer = document.querySelector("#playerMoveContainer");
const computerMoveContainer = document.querySelector("#computerMoveContainer");
const resultContainer = document.querySelector("#result");

const gameoverDisplay = document.querySelector(".modal-body");

let score = {
  wins: 0,
  losses: 0,
  ties: 0
}

rockBtn.addEventListener("click", () => {
  playGame("rock");
});

paperBtn.addEventListener("click", () => {
  playGame("paper");
});

scissorsBtn.addEventListener("click", () => {
  playGame("scissors");
});

function playGame(playerMove) {
  let result = "";
  const computerMove = randomMove();

  if(playerMove === computerMove) {
    result = "Its a tie!";
  }

  if(playerMove === "rock") {
    playerMoveContainer.innerHTML = "✊🏿";
    if(computerMove === "paper") {
      result = "You loss!";
    } else if(computerMove === "scissors") {
      result = "You win!";
    }
  }
  else if(playerMove === "paper") {
    playerMoveContainer.innerHTML = "✋🏿";
    if(computerMove === "scissors") {
      result = "You loss!";
    } else if(computerMove === "rock") {
      result = "You win!";
    }
  }
  else if(playerMove === "scissors") {
    playerMoveContainer.innerHTML = "✌🏿";
    if(computerMove === "rock") {
      result = "You loss!";
    } else if(computerMove === "paper") {
      result = "You win!";
    }
  }
  resultContainer.innerHTML = result;

  if(computerMove === "rock"){
    computerMoveContainer.innerHTML = "✊🏿";
  } else if(computerMove === "paper"){
    computerMoveContainer.innerHTML = "✋🏿";
  } else if(computerMove === "scissors"){
    computerMoveContainer.innerHTML = "✌🏿";
  }
  
  if(result === "You win!"){
    score.wins++;
  } else if(result === "You loss!"){
    score.losses++;
  } else if(result === "Its a tie!"){
    score.ties++;
  }

  updateScores();
  renderModal();
}

function randomMove() {
  const randomMove = ["rock", "paper", "scissors"];
  const computerMove = randomMove[Math.floor(Math.random() * 3)];
  return computerMove;
}

function updateScores() {
  wins.innerHTML = score.wins;
  losses.innerHTML = score.losses;
  ties.innerHTML = score.ties;
}

function renderModal() {
  if(score.wins === 5 || score.losses === 5) {
    if(score.wins === 5) {
      gameoverDisplay.innerHTML = `
        <h1>Congtratulations.</h1>
        <p class="fs-1">🎉</p>
        <p>You win!</p>
      `;
    } else{
      gameoverDisplay.innerHTML = `
        <h1>Oppss.</h1>
        <p class="fs-1">😭</p>
        <p>You loss!</p>
      `;
    }
    const gameOver = new bootstrap.Modal(document.querySelector("#gameOver"))
    gameOver.show();

    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
    updateScores();
  }
}