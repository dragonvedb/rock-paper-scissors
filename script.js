function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    switch(computerChoice) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
            break;
    }

    return computerChoice;
}

// THIS IS A SINGLE GAME ROUND.
// TAKE PLAYER'S AND COMP'S CHOICES AND RETURN WIN\LOSE\TIE MEASSAGE.
function playRound(computerChoice, playerChoice) {
    
    // pregenerate win and lose messages
    let winMsg = `You won! ${playerChoice} beats ${computerChoice}.`
    let loseMsg = `You lost. ${computerChoice} beats ${playerChoice}.`
        
    // this switch returns and win/lose message or a tie message in case the choices are the same
    switch(playerChoice) {
        case computerChoice:
            return `It's a tie! You both played ${computerChoice}.`;

        case 'Rock':
             return (computerChoice === 'Scissors') ? winMsg : loseMsg;

        case 'Paper':
            return (computerChoice === 'Rock') ? winMsg : loseMsg;

        case 'Scissors':
            return (computerChoice === 'Paper') ? winMsg : loseMsg;
    }
}

// THIS CONTAINS AN ENTIRE GAME SESSION CONSISTING OF FIVE ROUNDS.
// EVERY ROUND IT GENERATES A COMPUTER CHOICE AND ASKS THE PLAYER FOR ONE.
// THEN IT PLAYS A ROUND AND ADJUST THE SCORE. AFTER FIVE ROUNDS DECLARES A WINNER.
function game() {
    for (let i = 1; i <= 1; i++) {
        const computerChoice = getComputerChoice();
        // take player input and capitalize the first letter
        const playerChoice = function() {
            let input = prompt("What do you pick?").toLowerCase();
            let firstChar = input.charAt(0);
            return firstChar.toUpperCase() + input.substring(1);
        };
        
        alert(playRound(computerChoice, playerChoice()) );
    }
}

game();