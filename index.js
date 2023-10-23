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

  const createRestartButton = () => {
    const restartButton = document.createElement("button");
    restartButton.classList.add("restartButton");
    restartButton.textContent = "Play again!";

    document.querySelector("body").appendChild(restartButton);
  };

  const resultDisplay = document.querySelector(".result");
  const userScoreDisplay = document.querySelector(".userScore span");
  const computerScoreDisplay = document.querySelector(".computerScore span");
  let computerScore = 0;
  let userScore = 0;
  const totalResultDisplay = document.querySelector(".totalResult");

  const resetGame = () => {
    userScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    userScore = 0;
    computerScore = 0;
    totalResultDisplay.textContent = "";
    resultDisplay.textContent = "";
    document
      .querySelector("body")
      .removeChild(document.querySelector(".restartButton"));
  };

  const playRound = (usersChoice) => {
    usersChoice = usersChoice.toLowerCase();

    if (userScore < 5 && computerScore < 5) {
      // if player wins
      if (
        evalGameResult(usersChoice, getComputerChoice()).substring(0, 3) ===
        "win"
      ) {
        resultDisplay.textContent = makeResultMessage(
          evalGameResult(usersChoice, getComputerChoice())
        );
        userScore++;
        userScoreDisplay.textContent = userScore;
        if (userScore >= 5) {
          totalResultDisplay.textContent = " Player Wins ";
          createRestartButton();
        }

        // if player looses
      } else if (
        evalGameResult(usersChoice, getComputerChoice()).substring(0, 4) ===
        "loss"
      ) {
        resultDisplay.textContent = makeResultMessage(
          evalGameResult(usersChoice, getComputerChoice())
        );
        computerScore++;
        if (computerScore >= 5) {
          totalResultDisplay.textContent = " Computer Wins ";
          createRestartButton();
        }
        computerScoreDisplay.textContent = computerScore;
      } else if (evalGameResult(usersChoice, getComputerChoice()) === "draw") {
        resultDisplay.textContent = makeResultMessage(
          evalGameResult(usersChoice, getComputerChoice())
        );
      }
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

      case "restartButton":
        resetGame();
        e.stopPropagation();
        break;

      default:
        break;
    }
  });
});
