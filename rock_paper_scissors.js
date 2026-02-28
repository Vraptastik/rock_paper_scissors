function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    switch (a) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Not known";
    }
}

function getHumanChoice() {
    let a = prompt("Rock, paper or scissors?");
    return a;
}

let humanScore = 0; 
let computerScore = 0;

function playGame(){

playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())
playRound(getHumanChoice(), getComputerChoice())

}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case ("rock"):
            switch (computerChoice) {
                case "Rock":
                    console.log("Draw.");
                    displayScore(humanScore, computerScore);
                    break;
                case "Paper":
                    console.log("You lose. Computer chose Paper");
                    computerScore = computerScore + 1; 
                    displayScore(humanScore, computerScore);
                    break;
                case "Scissors":
                    console.log("You win. Computer chose Scissors");
                    humanScore = humanScore + 1;
                    displayScore(humanScore, computerScore);
                    break;
                }
            break;
        case ("paper"):
        switch (computerChoice) {
            case "Rock":
                console.log("You win. Computer chose Rock");
                humanScore = humanScore + 1;
                displayScore(humanScore, computerScore);
                break;
            case "Paper":
                console.log("Draw");
                displayScore(humanScore, computerScore);
                break;
            case "Scissors":
                console.log("You lose. Computer chose Scissors");
                computerScore = computerScore + 1; 
                displayScore(humanScore, computerScore);
                break;}
        break;
        case ("scissors"):
        switch (computerChoice) {
            case "Rock":
                console.log("You lose. Computer chose Rock.");
                computerScore = computerScore + 1;
                displayScore(humanScore, computerScore);
                break;
            case "Paper":
                console.log("You win. Computer chose Paper");
                humanScore = humanScore + 1;
                displayScore(humanScore, computerScore);
                break;
            case "Scissors":
                console.log("Draw.");
                displayScore(humanScore, computerScore);
                break;}
        break;
        }
    }

function displayScore(humanScore, computerScore) {
        console.log(`You have ${humanScore} points and Computer has ${computerScore} points.`);
    }

playGame()

