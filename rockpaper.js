function getComputerChoice() {
    var option = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random() * option.length);
    return option[randomChoice];
}

function players(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
}

const outcomes = {
    rock: {
        win: "scissors", lose: "paper"
    },

    paper: {
        win: "rock", lose: "scissors"
    },

    scissors: {
        win: "paper", lose: "rock"
    },
};

if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (outcomes[playerSelection].win === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  for (let i = 0; i < 5; i++) {
    getComputerChoice();
  }

  playerSelection = prompt();