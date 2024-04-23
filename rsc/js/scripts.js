
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];

    let computerSelection = options[Math.floor(Math.random()* (3)) ];

    return computerSelection;
}

let compScore = playerScore = 0;
let gameMessage = document.querySelector(".game-message");
let player = document.querySelector(".player-score");
let computer = document.querySelector(".computer-score");
let reset = document.querySelector(".reset");

reset.setAttribute("style", "display:none");


function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        gameMessage.textContent = 'You Won! Rock beats Scissors';

        player.textContent = playerScore
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        gameMessage.textContent = 'You Won! Scissors beat Paper';

        player.textContent = playerScore
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        gameMessage.textContent = 'You Won! Paper beats Rock';

        player.textContent = playerScore

    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        compScore += 1;
        gameMessage.textContent = 'You Lose! Rock beats Scissors';

        computer.textContent = compScore
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        compScore += 1;
        gameMessage.textContent = 'You Lose! Scissors beats Paper';

        computer.textContent = compScore
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        compScore += 1;
        gameMessage.textContent = 'You Lose! Paper beats Rock'

        computer.textContent = compScore
    }else if (playerSelection === computerSelection) {
        gameMessage.textContent = "Game Draw";
    }

    if (playerScore === 5) {
        gameMessage.setAttribute('style', "color: green");
        gameMessage.textContent = "YOU WON THE GAME";
        
        reset.setAttribute("style", "display:block;");
        document.querySelector(".options").setAttribute('style', "display:none; transition: all 0.3s ease-in-out");
    } else if (compScore === 5) {
        gameMessage.setAttribute('style', "color: darkred;");
        gameMessage.textContent = "YOU LOST THE GAME";

        reset.setAttribute("style", "display:block;");
        document.querySelector(".options").setAttribute('style', "display:none; transition: all 0.3s ease-in-out");
    }

    
}



const allSelections = document.querySelectorAll('button');

allSelections.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = (button.textContent).toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection, computerSelection)
    });
})






