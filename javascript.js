let humanScore = 0;
let computerScore = 0;
const div = document.createElement("div");
const secDiv = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div);
body.appendChild(secDiv);

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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        div.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
        secDiv.textContent = "It's a Tie!";

    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        div.textContent = "Human Score: " + humanScore + " Compouter Score: " + computerScore;
        secDiv.textContent = "Computer scores!";
    }
    else {
        humanScore++;
        div.textContent = "Human Score: " + humanScore + " Compouter Score: " + computerScore;
        secDiv.textContent = "Human scores!";
    }
    if (humanScore === 5) {
        div.textContent = "Human wins with a Score of 5";
        secDiv.textContent = "";
        humanScore = 0;
        computerScore = 0;

    }
    else if (computerScore === 5) {
        div.textContent = "Computer wins with a Score of 5";
        secDiv.textContent = "";
        humanScore = 0;
        computerScore = 0;
    }
}