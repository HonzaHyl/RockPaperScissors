function getComputerChoice() {
    // Array from which we will randomly select one item
    const RPSArray = ["Rock", "Paper", "Scissors"];

    // Generating index for random item selection
    const randomIndex = Math.floor(Math.random() * RPSArray.length);
    // Selecting item using random index
    const randomItem = RPSArray[randomIndex];
    return randomItem;
};

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    switch (player) {
        case "rock":
            if (computer === "paper"){ 
                return "Player loses"
            } else if (computer === "scissors") {
                return "Player wins"
            } else {
                return "It's a tie!"
            };
            break;
        
        case "paper":
            if (computer === "scissors"){ 
                return "Player loses"
            } else if (computer === "rock") {
                return "Player wins"
            } else {
                return "It's a tie!"
            };
            break;

        case "scissors":
            if (computer === "rock"){ 
                return "Player loses"
            } else if (computer === "paper") {
                return "Player wins"
            } else {
                return "It's a tie!"
            };
            break;
    }
};

function game() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5;) {
        const playerSelection = prompt("Enter on of following: Rock, Paper or Scissors");
        const round = playRound(playerSelection,getComputerChoice())

        if (round === "It's a tie!") {
            console.log("Tie. Play again.")
            continue;
        } else if (round === "Player wins") {
            i++;
            playerScore++;
            console.log("You win this round!")
        } else {
            i++;
            computerScore++;
            console.log("You lose this round!")
        };
    };

    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!") 
    };
}

game();