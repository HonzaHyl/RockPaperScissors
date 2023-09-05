function getComputerChoice() {
    // Array from which we will randomly select one item
    const RPSArray = ["Rock", "Paper", "Scissors"];

    // Generating index for random item selection
    const randomIndex = Math.floor(Math.random() * RPSArray.length);
    // Selecting item using random index
    const randomItem = RPSArray[randomIndex];
    return randomItem;
};

let roundWinner;
let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    if (
        (player === 'scissors' && computer == 'rock') ||
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors')
    ){
        roundWinner = 'Computer wins';
        computerScore ++;
    }else{
        roundWinner = 'Player wins';
        playerScore ++;
    };
    roundCounter ++;
};

function game(buttonID) {
    if(roundCounter === 5){
        displayWinner()
    } else {
        playRound(buttonID, getComputerChoice());
        updateScore();

    };
    

};

// function for game end scenario
function displayWinner(){
    if(computerScore>playerScore){
        alert('Computer wins!')
    }else{
        alert('Plyer wins!')
    };

};
// function for keeping score on screen
function updateScore(){
    const score = document.querySelector('.score');
    score.textContent = (`${playerScore}-${computerScore}`);

};
// function for restarting the game
function restartGame(){
    computerScore = 0;
    playerScore = 0;
    roundCounter = 0;

    const score = document.querySelector('.score');
    score.textContent = (`${playerScore}-${computerScore}`);
};



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.querySelector('#restart');

paper.addEventListener('click', () => game(paper.id));
scissors.addEventListener('click', () =>  game(scissors.id));
rock.addEventListener('click', () => game(rock.id));
restart.addEventListener('click', () => restartGame());
