// Simulates games until 5 wins are achieved.
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    const ptsNeeded = 3;
    while (true) {
        // Computer Selection
        function getComputerChoice() {
            const words = ["r", "p", "s"]; // r(ock), p(aper), s(cissors)
            randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex];
        }
        let computerSelection = getComputerChoice();
        
        // Player Selection
        let playerSelection = prompt("Write r for rock, p for paper, or s for scissors.");
        playerSelection = playerSelection.toLowerCase();
        
        // Error prompt
        while (playerSelection != "r" && playerSelection != "p" && playerSelection != "s") {
            playerSelection = prompt("Try again. Type r, p, or s.");
        }

        let winner = gameRound(playerSelection, computerSelection);
        if (winner == computerSelection) {
            computerPoints++;
        }
        else if (winner == playerSelection) {
            playerPoints++;
        }
        if (playerPoints == ptsNeeded) {
            return "You win the game!"
        }
        else if (computerPoints == ptsNeeded) {
            return "You lose the game."
        }
    }
}

// Simulates one round of the game
function gameRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw!");
    } else if (playerSelection == "r") {
        if (computerSelection == "s") {
            console.log("Rock beats Scissors. You win!");
            return playerSelection;
        }
        else {
            console.log("Paper beats Rock. You lose. :-(");
            return computerSelection;
        }
    } else if (playerSelection == "s") {
        if (computerSelection == "p") {
            console.log("Scissors beat Paper. You win!");
            return playerSelection;
        }
        else {
            console.log("Rock beats Scissors. You lose. :-(");
            return computerSelection;
        }
    } else { //if player selects paper
        if (computerSelection == "r") {
            console.log("Paper beats Rock. You win!");
            return playerSelection;
        }
        else {
            console.log("Scissors beat paper. You lose. :-(");
            return computerSelection;
        }
    }
}

document.addEventListener("DOMContentLoaded", game);