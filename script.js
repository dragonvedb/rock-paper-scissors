const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id);
    });
});

const promptArea = document.querySelector('#prompt')
const playerCounter = document.querySelector('#player-counter')
const computerCounter = document.querySelector('#comp-counter')

let roundCounter = 5;
let playerScore = 0;
let computerScore = 0;

function printMsg(msg) {
    for (const line of msg) {
        const para = document.createElement('p');
        para.textContent = line;
        promptArea.appendChild(para);
    }
};

function clearMsg() {
    promptArea.innerHTML = "";
}

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
// TAKE PLAYER'S AND COMP'S CHOICES AND RETURN WIN\LOSE\TIE MESSAGE.
function playRound(playerChoice) {

    let computerChoice = getComputerChoice();

    // generate win and lose messages and increment score counter
    let winMsg = function() {
        playerScore++;
        clearMsg()
        return [`👍 You won! ${playerChoice} beats ${computerChoice}.`, "What shall you choose next?"]
    };

    let loseMsg = function(){
        computerScore++;
        clearMsg()
        return [`👎 You lost. ${computerChoice} beats ${playerChoice}.`, "What shall you choose next?"]
    };

    // this switch returns and win/lose message or a tie message in case the choices are the same
    switch(playerChoice) {
        case computerChoice:
            clearMsg()
            printMsg([`It's a tie! You both played ${computerChoice}.`, "What shall you choose next?"]);
            break;

        case 'Rock':
             playerChoice = 'Rock';
             (computerChoice === 'Scissors') ? printMsg(winMsg()) : printMsg(loseMsg());
             break;

        case 'Paper':
            playerChoice = 'Paper';
            (computerChoice === 'Rock') ? printMsg(winMsg()) : printMsg(loseMsg());
            break;

        case 'Scissors':
            playerChoice = 'Scissors';
            (computerChoice === 'Paper') ? printMsg(winMsg()) : printMsg(loseMsg());
            break;
    }; 

    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;

    roundCounter--;
    if (roundCounter < 1) announceWinner();
}

function announceWinner() {
    clearMsg()

    if (playerScore > computerScore) {
        printMsg([`🎉 You have won the game with a ${playerScore - computerScore}-point lead!`, `The final score is ${playerScore} : ${computerScore}`])
    } else if (computerScore > playerScore) {
        printMsg([`💀 Unfortunately, you have lost the game by a ${computerScore - playerScore}-point margin.`, `The final score is ${playerScore} : ${computerScore}`])
    } else {
        printMsg([`The game is tied with a ${playerScore} : ${computerScore} score.`, `I guess you'll have play again to settle this!`])
    }

    playerScore = 0;
    computerScore = 0;
    roundCounter = 5;
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