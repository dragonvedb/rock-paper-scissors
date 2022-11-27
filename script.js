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