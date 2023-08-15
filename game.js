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
                return "You lose! Paper beats rock!"
            } else if (computer === "scissors") {
                return "You win! Scissors beats rock!"
            } else {
                return "It's a tie!"
            };
            break;
        
        case "paper":
            if (computer === "scissors"){ 
                return "You lose! Scissors beats paper!"
            } else if (computer === "rock") {
                return "You win! Paper beats rock!"
            } else {
                return "It's a tie!"
            };
            break;

        case "scissors":
            if (computer === "rock"){ 
                return "You lose! Rock beats scissors!"
            } else if (computer === "paper") {
                return "You win! Scissors beats paper!"
            } else {
                return "It's a tie!"
            };
            break;
    }
};

