document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const buttons =  document.querySelectorAll('.rpsButtons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        game(playerSelection);
        })
    })

    // const playButton = document.querySelector('.play');
    // playButton.addEventListener('click', () => {
    //     game(playerSelection);
    // });

    // Result Message
    function resultMessage(message) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
    }

    // Simulates games until "ptsNeeded" is achieved.
    function game(playerSelection) {
        let playerPoints = 0;
        let computerPoints = 0;
        const ptsNeeded = 1;
        while (true) {
            // Computer Selection
            function getComputerChoice() {
                const words = ["rock", "paper", "scissors"];
                randomIndex = Math.floor(Math.random() * words.length);
                return words[randomIndex];
            }
            let computerSelection = getComputerChoice();
            
            // Player Selection
            playerSelection = playerSelection.toLowerCase();

            let winner = gameRound(playerSelection, computerSelection);
            if (winner == computerSelection) {
                computerPoints++;
            }
            else if (winner == playerSelection) {
                playerPoints++;
            }
            if (playerPoints == ptsNeeded) {
                resultMessage("You win the game!");
            }
            else if (computerPoints == ptsNeeded) {
                resultMessage("You lose the game.");
            }
        }
    }

    // Simulates one round of the game
    function gameRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        resultMessage("Draw!");
        } else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                resultMessage("Rock beats Scissors. You win!");
                return playerSelection;
            }
            else {
                resultMessage("Rock losses to Paper. You lose. :-(");
                return computerSelection;
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                resultMessage("Scissors beat Paper. You win!");
                return playerSelection;
            }
            else {
                resultMessage("Scissors losses to Rock. You lose. :-(");
                return computerSelection;
            }
        } else { //if player selects paper
            if (computerSelection == "rock") {
                resultMessage("Paper beats Rock. You win!");
                return playerSelection;
            }
            else {
                resultMessage("Paper losses to Scissors. You lose. :-(");
                return computerSelection;
            }
        }
    }
})