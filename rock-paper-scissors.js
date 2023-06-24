function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const winResult = `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    const negResult = `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    const tieResult = "It's a tie!";

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Paper') {
                return negResult;
            } else if (computerSelection === 'Scissors') {
                    return winResult;
            } else {
                return tieResult;
            }
        case 'paper':
            if (computerSelection === 'Rock') {
                return winResult;
            } else if (computerSelection === 'Scissors') {
                return negResult;
            } else {
                return tieResult;
            }
        case 'scissors':
            if (computerSelection === 'Paper') {
                return winResult;
            } else if (computerSelection === 'Rock') {
                return negResult;
            } else {
                return tieResult;
            }
        default:
            return 'Choose: Rock, Paper, Scissors'; 
    }
}
        
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


playRound('paper', getComputerChoice());