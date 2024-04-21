
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];

    let computerSelection = options[Math.floor(Math.random()* (3)) ];

    return computerSelection;
}

