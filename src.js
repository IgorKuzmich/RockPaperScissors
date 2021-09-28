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

function game() {
    let score = 0
    for (let round = 0; round < 5; round++) {
        playerSelection = window.prompt("Choose: Rock, Paper, or Scissors")
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection)

        if (result === -1) {
            console.log("Lose: " + computerSelection + " beats " + playerSelection)
            score--
        } else if (result === 0) {
            console.log("Tie: both chose " + computerSelection)
        } else if (result === 1) {
            console.log("Win: " + playerSelection + " beats " + computerSelection)
            score++
        }
        console.log("Score: " + score)
    }
}

game()