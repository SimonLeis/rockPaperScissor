"use strict"

document.addEventListener("DOMContentLoaded", () => {


 


    // ask use what he wants to pick ( getUsersChoise)
    // save user's pick as an variable ( UserSelection)
    // make users pick to lower case
    // let usersChoice = prompt("What do you want to take ? Rock, Paper or Scissor")
    // usersChoice = usersChoice.toLowerCase()

    // console.log(usersChoice)




    // make computers decision and store it in anotther ( Changable ) variable ( getComputerChoice)
        // declare variable randomizer
        //make it a randomized number multiply it by 3
            //if between 0 and 1 take Rock and return it
            // if between 1 and 2 take Scissor and return it
            // if between 2 and 3 take Paper and return it


    function getComputerChoice() {

        let randomizer = Math.random()*3

        if(randomizer <= 1){
            return "rock"
        }else if(randomizer >1 && randomizer <= 2){
            return "scissor"
        }else if(randomizer > 2){
            return "paper"
        }


    }
    console.log(getComputerChoice())

    //make ( gameEval ) function which takes two parameters userSelection and computerSelection
        // if userSelection equals rock 
            // if computerSelection is paper return lossPaperBeatsRock
            // if computer Selection is Scissor return winRockBeatsScissor
            // if computerSelection is rock return draw
        // if user Selection is paper
            // if computerSelection is rock return winPaperBeatsRock
            // if computerSelection is scissor return lossScissorBeatsPaper
            // if computerSelection is paper return draw
        //if userSelection is scissor
            // if computerSelection is rock return lossRockBeatsScissor
            // if computerSelction is scissor return draw
            // if computerSelection is paper return winScissorBeatsPaper


    // make (resultMessage) with parameter (gameEval)
        // if gameEval = lossPaperBeatsRock return "You loose! Paper beats Rock"
        // if gameEval = lossScissorBeatsPaper return "You loose! Scissor beats Paper"
        // if gameEval = lossRockBeatsScissor return "You loose! Rock beats Scissor"
        // if gameEval = winRockBeatsScissor return "You won! Rock beats Scissor"
        // if gameEval = winPaperBeatsRock return "You won! Paper beats Rock"
        // if gameEval = winScissorBeatsPaper return "You won! Scissor beats Paper"
        // if gameEval = draw return "Draw! Let's try again"


    // resultMessage in konsole ausgeben




})