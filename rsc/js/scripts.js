
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];

    let computerSelection = options[Math.floor(Math.random()* (3)) ];

    return computerSelection;
}

let compScore = playerScore = 0;

function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log('You Won! Rock beats Scissors')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log('You Won! Scissors beat Paper')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        console.log('You Won! Paper beats Rock')
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        compScore += 1;
        console.log('You Lose! Rock beats Scissors')
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        compScore += 1;
        console.log('You Lose! Scissors beats Paper')
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        compScore += 1;
        console.log('You Lose! Paper beats Rock')
    }else if (playerSelection === computerSelection) {
        console.log("Game Draw");
    }
}
