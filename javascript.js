let humanScore = 0;
let computerScore = 0;
const div = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div);

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
});
function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, Paper or Scissors?");
//     if (humanChoice.toLowerCase() === "rock") {
//         return "Rock!";
//     }
//     else if (humanChoice.toLowerCase() === "paper") {
//         return "Paper!";
//     }
//     else if (humanChoice.toLowerCase() === "scissors") {
//         return "Scissors!"
//     }
//     else {
//         getHumanChoice();div.textContent = "";
//     }
// }

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        //do later
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
    }
    else {
        humanScore++;
    }
    if (humanScore === 5) {
        div.textContent = "Human wins with a Score of 5";
    }
    else if (computerScore === 5) {
        div.textContent = "Computer wins with a Score of 5";
    }
    else {
        div.textContent = "Human Score: " + humanScore + " Compouter Score: " + computerScore;
    }
}
// function playGame() {
//     playRound(computerChoice, humanChoice);

//     if (humanScore < computerScore) {
//         console.log("Computer wins with a Score of " + computerScore) + "!";
//     }
//     else if (humanScore === computerScore) {
//         console.log("It's a Tie!");
//     }
//     else {
//         console.log("Human wins with a score of " + humanScore + "!");
//     }
// }