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
    let getUsersChoice;

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
  }

  const playRound = (usersChoice) => {
    usersChoice = usersChoice.toLowerCase();

    if (
      evalGameResult(usersChoice, getComputerChoice()).substring(0, 3) === "win"
    ) {
      console.log(
        makeResultMessage(evalGameResult(usersChoice, getComputerChoice()))
      );
    } else if (
      evalGameResult(
        usersChoice,
        getComputerChoice().substring(0, 4) === "loss"
      )
    ) {
      console.log(
        makeResultMessage(evalGameResult(usersChoice, getComputerChoice()))
      );
    }
  };

  document.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.className) {
      case "userChoiceBtnScissor":
        playRound(target.textContent);
        e.stopPropagation();
        break;

      case "userChoiceBtnRock":
        playRound(target.textContent);
        e.stopPropagation();
        break;

      case "userChoiceBtnPaper":
        playRound(target.textContent);
        e.stopPropagation();
        break;

      default:
        break;
    }
  });
});
