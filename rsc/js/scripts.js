
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];

    let computerSelection = options[Math.floor(Math.random()* (3)) ];

    return computerSelection;
}

let compScore = playerScore = 0;

function playRound(playerSelection, computerSelection) {

    console.log(playerSelection + " " + computerSelection);

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


function playGame() { 
    
    let playerSelection = "Rock"
    let computerSelection = getComputerChoice().toLowerCase();

    playerSelection = playerSelection.toLowerCase();

    playRound(playerSelection, computerSelection);

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        i++;
    } else {
        console.log("\nInvalid selection. Please select 'ROCK', 'PAPER', or 'SCISSORS'\n");
    }
    

    console.log('\n');

    if (playerScore > compScore) {
        console.log("YOU WON THE GAME. SCORES: " + playerScore + "-" + compScore);
    } else if (playerScore < compScore) {
        console.log("YOU LOST THE GAME. SCORES: " + playerScore + "-" + compScore);
        
    } else {
        console.log("GAME DRAW. SCORES: " + playerScore + "-" + compScore);
    }
}


const allSelections = document.querySelectorAll('button');

allSelections.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.textContent;
        let computerSelection = getComputerChoice().toLowerCase();
        playRound(playerSelection, computerSelection)
    });
})






