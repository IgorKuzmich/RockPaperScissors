const result = document.querySelector('#result');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const buttons = document.querySelector('#buttons');

const choices = document.querySelectorAll('.choice');
choices.forEach(c => c.addEventListener('click', playGame));

const resetButton = document.createElement('button');
resetButton.classList.add('choice');
resetButton.addEventListener('click', reset);
const resetImage = document.createElement('img');
resetImage.src = 'images/reset.svg';
resetButton.appendChild(resetImage);

let pScore = 0;
let cScore = 0;

function playGame(e) {
    const playerSelection = e.currentTarget.id;
    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    playerChoice.src = `images/${playerSelection}.svg`
    computerChoice.src = `images/${computerSelection}.svg`
    
    if (outcome === -1) {
        result.textContent = "You Lose!";
        cScore++;
    } else if (outcome === 0) {
        result.textContent = "Tie!";
    } else if (outcome === 1) {
       result.textContent = "You Win!";
       pScore++;
    }
    updateScore(pScore, cScore);
    if (pScore == 5) {
        endGame(true);
    } else if (cScore == 5) {
        endGame(false);
    }
}

function endGame(isPlayerWinner) {
    if (isPlayerWinner) {
        result.textContent = "Congratulations!!! You Won!!!";
    }
    else {
        result.textContent = "Sorry! You Lost!";
    }

    choices.forEach(c => buttons.removeChild(c));
    buttons.appendChild(resetButton);
}

function reset() {
    pScore = 0;
    cScore = 0;
    updateScore(pScore, cScore);

    playerChoice.src = "images/rock.svg";
    computerChoice.src = "images/rock.svg";
    result.textContent = "Let's Play!";

    buttons.removeChild(resetButton);
    choices.forEach(c => buttons.appendChild(c));
}

function updateScore(pScore, cScore) {
    computerScore.textContent = `${cScore}`;
    playerScore.textContent = `${pScore}`;
}

function computerPlay() {
    const play = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * 3)
    return play[choice]
}

// playRound returns -1 for lose, 0 for tie, 1 for win
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return 0
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
       return 1
    }

    return -1
}