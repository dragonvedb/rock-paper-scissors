const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id);
    });
});

const roundsLeft = document.querySelector('#rounds-left')
const playerCounter = document.querySelector('#player-counter')
const computerCounter = document.querySelector('#comp-counter')
const playerSymbol = document.querySelector('#player-symbol')
const computerSymbol = document.querySelector('#comp-symbol')
const infoSymbol = document.querySelector('#info-symbol')
const promptArea = document.querySelector('#prompt')

let roundCounter;
let playerScore;
let computerScore;

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
            computerChoice = 'ROCK';
            break;
        case 1:
            computerChoice = 'PAPER';
            break;
        case 2:
            computerChoice = 'SCISSORS';
            break;
    }

    return computerChoice;
}

function startGame() {
    roundCounter = 5;
    roundsLeft.textContent = `${roundCounter} rounds remaining`

    playerScore = 0;
    computerScore = 0;

    clearMsg();
    printMsg(["The game has begun.", "What shall you choose?"])

    document.querySelector('#start').classList.add('hide');
    document.querySelector('#ROCK').classList.remove('hide');
    document.querySelector('#PAPER').classList.remove('hide');
    document.querySelector('#SCISSORS').classList.remove('hide');

    return;
}

// THIS IS A SINGLE GAME ROUND.
// TAKE PLAYER'S AND COMP'S CHOICES AND RETURN WIN\LOSE\TIE MESSAGE.
function playRound(playerChoice) {

    if (playerChoice === 'start' || playerChoice === 'reset') {
        return startGame();
    }

    playerSymbol.classList.remove('green-glow', 'red-glow', 'small-fist');
    computerSymbol.classList.remove('green-glow', 'red-glow', 'small-fist');

    let computerChoice = getComputerChoice();

    // generate win and lose messages and increment score counter
    let winMsg = function() {
        playerScore++;
        adjustSymbols(playerChoice, computerChoice);
        playerSymbol.classList.add('green-glow');
        computerSymbol.classList.add('red-glow');
        clearMsg();
        return [`👍 You won! ${playerChoice} beats ${computerChoice}.`, "What shall you choose next?"]
    };

    let loseMsg = function(){
        computerScore++;
        adjustSymbols(playerChoice, computerChoice);
        playerSymbol.classList.add('red-glow');
        computerSymbol.classList.add('green-glow');
        clearMsg();
        return [`👎 You lost. ${computerChoice} beats ${playerChoice}.`, "What shall you choose next?"]
    };

    // this switch returns and win/lose message or a tie message in case the choices are the same
    switch(playerChoice) {
        case computerChoice:
            adjustSymbols(playerChoice, computerChoice);
            clearMsg()
            printMsg([`It's a tie! You both played ${computerChoice}.`, "What shall you choose next?"]);
            break;

        case 'ROCK':
             playerChoice = 'ROCK';
             (computerChoice === 'SCISSORS') ? printMsg(winMsg()) : printMsg(loseMsg());
             break;

        case 'PAPER':
            playerChoice = 'PAPER';
            (computerChoice === 'ROCK') ? printMsg(winMsg()) : printMsg(loseMsg());
            break;

        case 'SCISSORS':
            playerChoice = 'SCISSORS';
            (computerChoice === 'PAPER') ? printMsg(winMsg()) : printMsg(loseMsg());
            break;
    }; 

    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;

    

    roundCounter--;
    roundsLeft.textContent = `${roundCounter} rounds remaining`;
    if (roundCounter < 1) announceWinner();
}

function adjustSymbols(playerChoice, computerChoice, infoState) {
    switch(playerChoice) {
        case 'ROCK':
            playerSymbol.textContent = '✊';
            playerSymbol.classList.add('small-fist');
            break;

        case 'PAPER':
            playerSymbol.textContent = '✋';
            break;

        case 'SCISSORS':
            playerSymbol.textContent = '✌️';
            break;
    }

    switch(computerChoice) {
        case 'ROCK':
            computerSymbol.textContent = '✊';
            computerSymbol.classList.add('small-fist');
            break;

        case 'PAPER':
            computerSymbol.textContent = '✋';
            break;

        case 'SCISSORS':
            computerSymbol.textContent = '✌️';
            break;
    }

    return;
}


function announceWinner() {
    
    clearMsg();
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