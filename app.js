const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerResultDisplay = document.getElementById("playerResultDisplay")
const computerResultDisplay = document.getElementById("computerResultDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let results = "";

    if(playerChoice === computerChoice){
        results = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                results = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                results = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                results = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;


        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = results;

    resultDisplay.classList.remove("greenText", "redText")
    switch(results){
        case "YOU WIN!":
        resultDisplay.classList.add('greenText');
        playerScore++;
        playerResultDisplay.textContent = playerScore;
        break;

        case "YOU LOSE!":
        resultDisplay.classList.add('redText');
        computerScore ++;
        computerResultDisplay.textContent = computerScore;
        break;

    }

}