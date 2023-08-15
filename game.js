function getComputerChoice() {
    // Array from which we will randomly select one item
    const RPSArray = ["Rock", "Paper", "Scissors"];

    // Generating index for random item selection
    const randomIndex = Math.floor(Math.random() * RPSArray.length);
    // Selecting item using random index
    const randomItem = RPSArray[randomIndex];
    return randomItem;
};

