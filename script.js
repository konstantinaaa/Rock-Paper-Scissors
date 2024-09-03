function getRandomInt(max) {
  let randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
}

//  The computer picks a random choice between these 3 options( rock,  paper, scissors)
function getComputerChoice() {
  let number = getRandomInt(3);

  let computerChoice;

  if (number === 0) {
    computerChoice = "rock";
  } else if (number === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// create a reference to the buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// disable the buttons when the game ends
function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

// keep track of the score
let humanScore = 0;
let computerScore = 0;

// create a reference for the div
const div = document.createElement("div");
div.style.fontSize = "25px";
div.style.paddingTop = "40px";
div.textContent = `Your score: ${humanScore} , Computer's score: ${computerScore}`;
document.body.appendChild(div);

// function that plays one round of the game
function playRound(humanChoice, computerChoice) {
  //   Compare the user's option with computer's option
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    div.textContent = `Your score: ${humanScore} , Computer's score: ${computerScore}`;
    alert(`You won! ${humanChoice} beats ${computerChoice}.`);
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    div.textContent = `Your score: ${humanScore} , Computer's score: ${computerScore}`;

    alert(`You lost. ${computerChoice} beats ${humanChoice}.`);
  } else if (humanChoice === computerChoice) {
    alert(`It's a tie! You both selected ${computerChoice}.`);
  }

  // declare the winner
  if (humanScore === 5) {
    alert("Congratulations! You won the game!");
    disableButtons();
  } else if (computerScore === 5) {
    alert("Game Over! You lost the game. Try again.");
    disableButtons();
  }
}

rock.addEventListener("click", () => {
  //  save the computer's option in a variable
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paper.addEventListener("click", () => {
  //  save the computer's option in a variable
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissors.addEventListener("click", () => {
  //  save the computer's option in a variable
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
