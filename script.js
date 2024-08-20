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

//   A user picks a choice between these 3 options( rock,  paper, scissors)
function getHumanChoice() {
  let choice = prompt(
    "Please choose one of these three options: rock, paper, scissors"
  );
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return "false";
  }
}

// function that plays one round of the game
function playRound(humanChoice, computerChoice) {
  //   Compare the user's option with computer's option
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    return "computer";
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return "invalid";
  }
}

// Main game - 5 rounds
function playGame() {
  // keep track of  the players score
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    //  Save the computer's option in a variable.
    const computerSelection = getComputerChoice();
    console.log("Computer response: " + computerSelection);

    //  Save the user's option in a variable.
    const humanSelection = getHumanChoice();
    console.log("Human choice: " + humanSelection);

    // if the user's input is invalid
    if (humanSelection === "false") {
      alert("Invalid choice. Please try again.");
      round--;
      continue;
    }

    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === "human") {
      humanScore++;
      alert(
        `You won this round!\n${humanSelection} beats ${computerSelection}.`
      );
    } else if (roundWinner === "computer") {
      computerScore++;
      alert(
        `You lost this round!\n${computerSelection} beats ${humanSelection}`
      );
    } else {
      alert("This round it's a tie!");
    }
  }

  // Declare the winner
  if (humanScore > computerScore) {
    alert(
      `Congratulations! You won the game!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    alert(
      `Sorry, you lost the game.\nYour score: ${humanScore}\nComputer's score: ${computerScore}`
    );
  } else {
    alert(`It's a tie! You both selected ${humanSelection}`);
  }
}

// start the game
playGame();
