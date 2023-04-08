// Simulates games until 5 wins are achieved.
function game() {
    playerPoints = 0;
    computerPoints = 0;
    while (playerPoints != 5 || computerPoints != 5) {
        // Computer Selection
        function getComputerChoice() {
            const words = ["r", "p", "s"]; // r(ock), p(aper), s(cissors)
            randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex];
        }
        let computerSelection = getComputerChoice();
        
        // Player Selection
        let playerSelection = prompt("Write r for rock, p for paper, or s for scissors.");
        let playerLower = playerSelection.toLowerCase();
        
        while (playerLower != "r" && playerLower != "p" && playerLower != "s") {
            playerLower = prompt("Try again. Type r, p, or s.");
        }

        let winner = gameRound(playerSelection, computerSelection);
        if (winner == computerSelection) {
            computerPoints++;
        }
        else if (winner == playerSelection) {
            playerPoints++;
        }
        computerSelection = getComputerChoice();
    }
    if (playerPoints = 2) {
        return "You win the game!"
    }
    else {
        return "You lose the game."
    }
}

// Simulates one round of the game
function gameRound(playerLower, computerSelection) {
    if (playerLower == computerSelection) {
        console.log("Draw!");
    } else if (playerLower == "r") {
        if (computerSelection == "s") {
            console.log("Rock beats Scissors. You win!");
            return playerLower;
        }
        else {
            console.log("Paper beats Rock. You lose. :-(");
            return computerSelection;
        }
    } else if (playerLower == "s") {
        if (computerSelection == "p") {
            console.log("Scissors beat Paper. You win!");
            return playerLower;
        }
        else {
            console.log("Rock beats Scissors. You lose. :-(");
            return computerSelection;
        }
    } else { //if player selects paper
        if (computerSelection == "r") {
            console.log("Paper beats Rock. You win!");
            return playerLower;
        }
        else {
            console.log("Scissors beat paper. You lose. :-(");
            return computerSelection;
        }
    }
}

document.addEventListener("DOMContentLoaded", game);