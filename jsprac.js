const choices = ["rock", "paper", "scissors"]; 
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    const resetTies = document.querySelector(".ties");
    resetTies.textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}


/*const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => resetBtn.style.display = "none";) */

function startGame() {
    let gameButtons = document.querySelectorAll(".aButton");
    gameButtons.forEach((button) =>
        button.addEventListener("click", () => {
            if (button.id) {
                roundPlay(button.id);
            
        }
    })
    );
}   

const resetBtn = document.querySelector("resetBtn");


function roundPlay(playerChoice) { 
    let wins = checkWins(); 
    if (wins == 5) {
        displayEnd();
    }
    if (wins >= 5 ) {
        return;
    }

    const computerChoice = computerSelect(); 

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner); 
    tallyWins(); 
    displayRound(playerChoice, computerChoice, winner);
    
}


  
function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector(".computerChoice").textContent = `The Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner); 
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the round!";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "You lost the round.";
    } else {
        document.querySelector(".winner").textContent = "Tie.";
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;
    if (playerWins == 5) {
        document.querySelector(".winner").textContent = "You scored 5 points!";
    } else {
        document.querySelector(".winner").textContent = "The computer scored 5 points.";
    }

}


/* computer choice */
function computerSelect() { 
    return choices[Math.floor(Math.random()*choices.length)]
}

/* checking */ 
function checkWinner(choiceP, choiceC) {
    if ((choiceP == "rock" && choiceC == "scissors") || 
    (choiceP == "scissors" && choiceC == "paper") || 
    (choiceP == "paper" && choiceC == "rock")) {
        return "Player";
    } else if (choiceP == choiceC) {
        return "Tie"; 
    } else {
        return "Computer";
    }
}

function checkWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}


function tallyWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function setWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

/*function logRound(pChoice, cChoice)*/


startGame();
