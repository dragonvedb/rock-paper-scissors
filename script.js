const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        alert(playRound(e.target.id));
    });
});

const promptArea = document.querySelector('#prompt')
const playerCounter = document.querySelector('#player-counter')
const computerCounter = document.querySelector('#comp-counter')

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

let playerScore = 0;
let computerScore = 0;

function printMsg (msg) {
    for (const line of msg) {
        const line = document.createElement('p');
        line.textContent = msg;
        promptArea.appendChild(line);
    }
};

printMsg([`👍 You won! ${playerScore} beats ${computerScore}.`])

// THIS IS A SINGLE GAME ROUND.
// TAKE PLAYER'S AND COMP'S CHOICES AND RETURN WIN\LOSE\TIE MESSAGE.
function playRound(playerChoice) {

    let computerChoice = getComputerChoice();
    // this is to enable shortened inputs
    let computerChoiceShort = computerChoice.charAt(0);
    
    // generate win and lose messages and increment score counter
   let winMsg = function() {
        playerScore++;
        return `👍 You won! ${playerChoice} beats ${computerChoice}.`
    };

    let loseMsg = function(){
        computerScore++;
        return `👎 You lost. ${computerChoice} beats ${playerChoice}.`
    };

    switch(playerChoice) {
        case '✊':
            playerChoice = 'Rock';
            break;
        case '🤚':
            playerChoice = 'Paper';
            break;
        case '✌️':
            playerChoice = 'Scissors';
            break;
    }
        
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
/*function game() {

    alert("You are about to play a game of Rock-Paper-Scissors against the computer." + '\n\n' + "The game is going to consist of five rounds.")

    alert("Each round you are going to input either 'Rock', 'Paper' or 'Scissors'." + '\n' + "(You can also use shorthands 'r', 'p' and 's' or emojis ✊ 🤚 ✌️)" + '\n\n' + "Then your input will be compared against the computer's and the winner of the round declared!")
    
    for (let i = 1; i > 0; i++) {
        const computerChoice = getComputerChoice();
        // this is to enable shortened inputs
        const computerChoiceShort = computerChoice.charAt(0);
        const playerInput = prompt("What do you pick?");
        // take player input and capitalize the first letter
        const playerChoice = function() {
            let firstChar = playerInput.charAt(0);
            return firstChar.toUpperCase() + playerInput.substring(1).toLowerCase();
        };

        // checks what the player did with the prompt
        // if the prompt window was cancelled or nothing was input, show the "no input" message
        switch (playerInput) {
        case null:
        case '':
            alert("❌ You can't play if you don't input anything!");
            i--;
            continue;
        
        default:
            // check if input is valid. Start the round if it is, show the message if it's not
            switch (playerInput.toLowerCase()) {
                case 'rock':
                case 'r':
                case '✊':
                case 'paper':
                case 'p':
                case '🤚':
                case 'scissors':
                case 's':
                case '✌️':
                    alert( playRound(computerChoice, computerChoiceShort, playerChoice()) + '\n' + `Current score is ${playerScore} : ${computerScore}` + '\n\n' + `${5 - i} rounds remaining.`);
                    break;
                default:
                    alert("❌ You can't play that! Please input something else.");
                    i--;
                    continue;
                }
        }
        }

    if (playerScore > computerScore) {
        alert( `🎉 You have won the game with a ${playerScore - computerScore}-point lead!` + '\n' + `The final score is ${playerScore} : ${computerScore}`)
    } else if (computerScore > playerScore) {
        alert( `💀 Unfortunately, you have lost the game by a ${computerScore - playerScore}-point margin.` + '\n' + `The final score is ${playerScore} : ${computerScore}`)
    } else {
        alert(`The game is tied with a ${playerScore} : ${computerScore} score.` + '\n' + `I guess you'll have play again to settle this!`)
    }
}


let playerScore = 0;
let computerScore = 0;

game();*/