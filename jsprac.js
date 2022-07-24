function computerPlay() {
    let choices = ["Scissors", "Rock", "Paper"]
    choices = choices[Math.floor(Math.random()*choices.length)];
    return choices;
}

function singlePlay(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        /*return `You win! ${playerSelection} beats ${computerSelection}`;*/
        return 1;
    } else if ((playerSelection === "Paper" && computerSelection === "Scissors") || 
    (playerSelection === "Rock" && computerSelection === "Paper") || 
    (playerSelection === "Scissors" && computerSelection === "Rock")){
        /*return `You lose! ${computerSelection} beats ${playerSelection}`;*/
        return 2;
    } else {
        /*return "It's a tie!";*/
        return 3;
    }
}

let points = 0; 
function game() {
    for (let i = 0; i < 5; i++) {
        userAns = prompt("Enter Rock, Paper, or Scissors: ");
        if (singlePlay(userAns, computerPlay()) === 1) {
            points += 1; 
            console.log(`You have (${points}) points`);
        } else {
            points += 0; 
            console.log(`You have (${points}) points`);
        }
    }
    (points >= 3) ? "You win!" : "You lose!"; 
    
}

console.log(game());


