"use strict";

document.addEventListener("DOMContentLoaded", () => {
  function getComputerChoice() {
    let randomizer = Math.random() * 3;

    if (randomizer <= 1) {
      return "rock";
    } else if (randomizer > 1 && randomizer <= 2) {
      return "scissor";
    } else if (randomizer > 2) {
      return "paper";
    }
  }

  const evalGameResult = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === "rock") {
      if (getComputerChoice === "paper") {
        return "lossPaperBeatsRock";
      }
      if (getComputerChoice === "scissor") {
        return "winRockBeatsScissor";
      }
      if (getComputerChoice === "rock") {
        return "draw";
      }
    }

    if (getUserChoice === "paper") {
      if (getComputerChoice === "rock") {
        return "winPaperBeatsRock";
      }
      if (getComputerChoice === "scissor") {
        return "lossScissorBeatsPaper";
      }
      if (getComputerChoice === "paper") {
        return "draw";
      }
    }

    if (getUserChoice === "scissor") {
      if (getComputerChoice === "rock") {
        return "lossRockBeatsScissor";
      }
      if (getComputerChoice === "scissor") {
        return "draw";
      }
      if (getComputerChoice === "paper") {
        return "winScissorBeatsPaper";
      }
    } else {
      return "False choice. Try again!";
    }
  };

  const makeResultMessage = (result) => {
    if (result === "lossPaperBeatsRock") {
      return "You loose! Paper beats Rock";
    }
    if (result === "lossScissorBeatsPaper") {
      return "You loose! Scissor beats Paper";
    }
    if (result === "lossRockBeatsScissor") {
      return "You loose! Rock beats Scissor";
    }
    if (result === "winRockBeatsScissor") {
      return "You won! Rock beats Scissor";
    }
    if (result === "winPaperBeatsRock") {
      return "You won! Paper beats Rock";
    }
    if (result === "winScissorBeatsPaper") {
      return "You won! Scissor beats Paper";
    }
    if (result === "draw") {
      return "Draw! Let's try again";
    }
  };

  function playGame() {
    let counter = 0;
    let computerScore = 0;
    let userScore = 0;

    const playRound = () => {
      if (counter <= 5) {
        let getUsersChoice = prompt(
          "What do you want to take ? Rock, Paper or Scissor"
        );
        getUsersChoice = getUsersChoice.toLowerCase();

        if (
          evalGameResult(getUsersChoice, getComputerChoice()).substring(
            0,
            3
          ) === "win"
        ) {
          userScore++;
          console.log(
            makeResultMessage(
              evalGameResult(getUsersChoice, getComputerChoice())
            )
          );
        } else if (
          evalGameResult(getUsersChoice, getComputerChoice()).substring(
            0,
            4
          ) === "loss"
        ) {
          computerScore++;
          console.log(
            makeResultMessage(
              evalGameResult(getUsersChoice, getComputerChoice())
            )
          );
        }
      } else if (
        evalGameResult(getUsersChoice, getComputerChoice()) === "draw"
      ) {
        computerScore++;
        userScore++;
        console.log(
          makeResultMessage(evalGameResult(getUsersChoice, getComputerChoice()))
        );
      }
    };

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    const evalTotalGameResult = () => {
      if (computerScore < userScore) {
        console.log(`You've won with ${userScore} to ${computerScore}`);
      } else if (userScore < computerScore) {
        console.log(`You've lost with ${userScore} to ${computerScore}`);
      } else if (userScore === computerScore) {
        console.log("It was a draw, try again!");
      }

      counter = 0;
      computerScore = 0;
      userScore = 0;
    };

    evalTotalGameResult();
  }

  playGame();
});
