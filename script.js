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
function playRound(computerChoice, computerChoiceShort, playerChoice) {
    
    // generate win and lose messages and increemnt score counter
    let winMsg = function() {
        playerScore++;
        return `You won! ${playerChoice} beats ${computerChoice}.`
    };

    let loseMsg = function(){
        computerScore++;
        return `You lost. ${computerChoice} beats ${playerChoice}.`
    };
        
    // this switch returns and win/lose message or a tie message in case the choices are the same
    switch(playerChoice) {
        case computerChoice:
        case computerChoiceShort:
            return `It's a tie! You both played ${computerChoice}.`;

        case 'Rock':
        case 'R':
             playerChoice = 'Rock';
             return (computerChoice === 'Scissors') ? winMsg() : loseMsg();

        case 'Paper':
        case 'P':
            playerChoice = 'Paper';
            return (computerChoice === 'Rock') ? winMsg() : loseMsg();

        case 'Scissors':
        case 'S':
            playerChoice = 'Scissors';
            return (computerChoice === 'Paper') ? winMsg() : loseMsg();
    }
}

// THIS CONTAINS AN ENTIRE GAME SESSION CONSISTING OF FIVE ROUNDS.
// EVERY ROUND IT GENERATES A COMPUTER CHOICE AND ASKS THE PLAYER FOR ONE.
// THEN IT PLAYS A ROUND AND ADJUST THE SCORE. AFTER FIVE ROUNDS DECLARES A WINNER.
function game() {
    for (let i = 1; i <= 1; i++) {
        const computerChoice = getComputerChoice();
        //this is to enable shortened inputs
        const computerChoiceShort = computerChoice.charAt(0);
        // take player input and capitalize the first letter
        const playerInput = prompt("What do you pick?");

        if (playerInput === null) {
            alert("You can't play if you don't input anything!");
            continue;
        }
        
        const playerChoice = function() {
            let firstChar = playerInput.charAt(0);
            return firstChar.toUpperCase() + playerInput.substring(1).toLowerCase();
        };

        alert( playRound(computerChoice, computerChoiceShort, playerChoice()) + '\n' + `Current score is ${playerScore} : ${computerScore}`);
    }

    if (playerScore > computerScore) {
        alert( `You have won the game with a ${playerScore - computerScore}-point lead!` + '\n' + `The final score is ${playerScore} : ${computerScore}`)
    } else if (computerScore > playerScore) {
        alert( `Unfortunately, you have lost the game by a ${computerScore - playerScore}-point margin` + '\n' + `The final score is ${playerScore} : ${computerScore}`)
    } else {
        alert(`The game is tied with a ${playerScore} : ${computerScore} score.` + '\n' + `I guess you'll have play again to settle this!`)
    }
}


let playerScore = 0;
let computerScore = 0;

game();