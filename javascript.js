let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock!";
    }
    else if (choice === 2) {
        return "Paper!";
    }
    else {
        return "Scissors!";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock!";
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return "Paper!";
    }
    else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors!"
    }
    else {
        getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a Tie!");
    }
    else if ((humanChoice === "Rock!" && computerChoice === "Paper!") || (humanChoice === "Paper!" && computerChoice === "Scissors!") || (humanChoice === "Scissors!" && computerChoice === "Rock!")) {
        console.log("Computer wins!");
        computerScore++;
    }
    else {
        console.log("Human wins!");
        humanScore++;
    }
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    for (let i = 0; i < 5; i++) {
        playRound(computerChoice, humanChoice);
    }
    if (humanScore < computerScore) {
        console.log("Computer wins with a Score of " + computerScore) + "!";
    }
    else if (humanScore === computerScore) {
        console.log("It's a Tie!");
    }
    else {
        console.log("Human wins with a score of " + humanScore + "!");
    }
}