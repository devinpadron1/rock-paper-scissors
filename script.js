document.addEventListener('DOMContentLoaded', () => {

    // Points
    const counters = document.querySelectorAll('.score');
    
    let playerPoints = 0;
    let computerPoints = 0;

    function updateCounters () {
        counters.forEach((counterElem) => {
            counterElem.textContent = 'Counter ${playerPoints}';
        })
    }

    // Computer Selection
    function getComputerChoice() {
        const words = ["rock", "paper", "scissors"];
        randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Buttons
    const buttons =  document.querySelectorAll('.rpsButtons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();
        gameRound(playerSelection, computerSelection);
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

    // Simulates one round of the game
    function gameRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            resultMessage("Draw!");
            } else if (playerSelection == "rock") {
                if (computerSelection == "scissors") {
                    resultMessage("Rock beats Scissors. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Rock losses to Paper. You lose. :-(");
                    computerPoints++;
                }
            } else if (playerSelection == "scissors") {
                if (computerSelection == "paper") {
                    resultMessage("Scissors beat Paper. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Scissors losses to Rock. You lose. :-(");
                    computerPoints++;
                }
            } else { //if player selects paper
                if (computerSelection == "rock") {
                    resultMessage("Paper beats Rock. You win!");
                    playerPoints++;
                }
                else {
                    resultMessage("Paper losses to Scissors. You lose. :-(");
                    computerPoints++;
                }
        }
    }
})