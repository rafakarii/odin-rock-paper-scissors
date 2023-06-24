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
            return 'Invalid Prompt'; 
    }
}
        
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let invalidInput = true;
        let playerSelection = '';
        while (invalidInput) {
            playerSelection = prompt('Choose: Rock, Paper or Scissors. To end the game type Exit').toLowerCase();
            if (
                (playerSelection === 'rock') ||
                (playerSelection === 'paper') ||
                (playerSelection === 'scissors') ||
                (playerSelection === 'exit')
            ) {
                invalidInput = false;
            }
        }
        if (playerSelection === 'exit') {
            break;
        }
         
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.startsWith('You Win')) {
            playerScore++;
        } else if (roundResult.startsWith('You Lose')) {
            computerScore++;
        }
    }

    let gameScore = `Score ${playerScore} : ${computerScore}`;
    let gameResult = '';
    if (playerScore > computerScore) {
        gameResult = 'You win! ';
    } else if (playerScore < computerScore) {
        gameResult = 'You lose! ';
    } else {
        gameResult = "It's a tie! ";
    }
    console.log('Game over. ' + gameResult + gameScore);
}