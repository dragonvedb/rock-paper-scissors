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

    function playRound(computerChoice, playerChoice) {
        let winMsg = `You won! ${playerChoice} beats ${computerChoice}.`
        let loseMsg = `You lost. ${computerChoice} beats ${playerChoice}.`
        
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

    const computerChoice = getComputerChoice();
    const playerChoice = 'Rock';
    console.log(computerChoice)
    //console.log(playRound(computerChoice, playerChoice))