// // // Get elements
// // const playerScoreDisplay = document.getElementById('player-score');
// // const computerScoreDisplay = document.getElementById('computer-score');
// // const resultDisplay = document.getElementById('result');
// // const rockBtn = document.getElementById('rock');
// // const paperBtn = document.getElementById('paper');
// // const scissorsBtn = document.getElementById('scissors');
// // const rulesPopup = document.getElementById('rules-popup');

// // // Initialize scores
// // let playerScore = 0;
// // let computerScore = 0;

// // // Event listeners for player's choices
// // rockBtn.addEventListener('click', () => playRound('rock'));
// // paperBtn.addEventListener('click', () => playRound('paper'));
// // scissorsBtn.addEventListener('click', () => playRound('scissors'));

// // // Function to play a single round
// // function playRound(playerSelection) {
// //     const computerSelection = computerPlay();
// //     const result = getResult(playerSelection, computerSelection);
// //     displayResult(result);
// //     updateScore(result);
// // }

// // // Function to get computer's choice
// // function computerPlay() {
// //     const choices = ['rock', 'paper', 'scissors'];
// //     const randomIndex = Math.floor(Math.random() * choices.length);
// //     return choices[randomIndex];
// // }

// // // Function to determine the winner
// // function getResult(playerSelection, computerSelection) {
// //     if (
// //         (playerSelection === 'rock' && computerSelection === 'scissors') ||
// //         (playerSelection === 'paper' && computerSelection === 'rock') ||
// //         (playerSelection === 'scissors' && computerSelection === 'paper')
// //     ) {
// //         return 'win';
// //     } else if (playerSelection === computerSelection) {
// //         return 'tie';
// //     } else {
// //         return 'lose';
// //     }
// // }

// // // Function to display the result
// // function displayResult(result) {
// //     if (result === 'win') {
// //         window.location.href = 'win.html';
// //     } else if (result === 'tie') {
// //         window.location.href = 'tie.html';
// //     } else {
// //         window.location.href = 'lose.html';
// //     }
// // }

// // // Function to update scores
// // function updateScore(result) {
// //     if (result === 'win') {
// //         playerScore++;
// //     } else if (result === 'lose') {
// //         computerScore++;
// //     }
// //     playerScoreDisplay.textContent = playerScore;
// //     computerScoreDisplay.textContent = computerScore;
// // }

// // // Function to show rules popup
// // function showRules() {
// //     rulesPopup.style.display = 'block';
// // }

// // // Function to close rules popup
// // function closeRules() {
// //     rulesPopup.style.display = 'none';
// // }

// // // Initialize scores from local storage if available
// // window.onload = () => {
// //     if (localStorage.getItem('playerScore')) {
// //         playerScore = parseInt(localStorage.getItem('playerScore'));
// //         playerScoreDisplay.textContent = playerScore;
// //     }
// //     if (localStorage.getItem('computerScore')) {
// //         computerScore = parseInt(localStorage.getItem('computerScore'));
// //         computerScoreDisplay.textContent = computerScore;
// //     }
// // };

// // // Store scores in local storage
// // window.onbeforeunload = () => {
// //     localStorage.setItem('playerScore', playerScore);
// //     localStorage.setItem('computerScore', computerScore);
// // };
// // Get elements
// const playerScoreDisplay = document.getElementById('player-score');
// const computerScoreDisplay = document.getElementById('computer-score');
// const resultDisplay = document.getElementById('result');
// const rockBtn = document.getElementById('rock');
// const paperBtn = document.getElementById('paper');
// const scissorsBtn = document.getElementById('scissors');
// const rulesPopup = document.getElementById('rules-popup');

// // Initialize scores
// let playerScore = 0;
// let computerScore = 0;

// // Event listeners for player's choices
// rockBtn.addEventListener('click', () => playRound('rock'));
// paperBtn.addEventListener('click', () => playRound('paper'));
// scissorsBtn.addEventListener('click', () => playRound('scissors'));

// // Function to play a single round
// function playRound(playerSelection) {
//     const computerSelection = computerPlay();
//     const result = getResult(playerSelection, computerSelection);
//     displayResult(playerSelection, computerSelection, result);
//     updateScore(result);
// }

// // Function to get computer's choice
// function computerPlay() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// // Function to determine the winner
// function getResult(playerSelection, computerSelection) {
//     if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         return 'win';
//     } else if (playerSelection === computerSelection) {
//         return 'tie';
//     } else {
//         return 'lose';
//     }
// }

// // Update the displayResult function to redirect to the result page with the result information
// function displayResult(playerSelection, computerSelection, result) {
//     const params = new URLSearchParams();
//     params.append('playerSelection', playerSelection);
//     params.append('computerSelection', computerSelection);
//     params.append('result', result);
//     window.location.href = `result.html?${params.toString()}`;
// }


// // Function to update scores
// // Function to update scores
// function updateScore(result) {
//     if (result === 'win') {
//         playerScore++;
//     } else if (result === 'lose') {
//         computerScore++;
//     }
//     playerScoreDisplay.textContent = playerScore;
//     computerScoreDisplay.textContent = computerScore;

//     // Store scores in local storage
//     localStorage.setItem('playerScore', playerScore.toString());
//     localStorage.setItem('computerScore', computerScore.toString());
// }


// // Function to show rules popup
// function showRules() {
//     rulesPopup.style.display = 'block';
// }

// // Function to close rules popup
// function closeRules() {
//     rulesPopup.style.display = 'none';
// }

// // Initialize scores from local storage if available
// window.onload = () => {
//     if (localStorage.getItem('playerScore')) {
//         playerScore = parseInt(localStorage.getItem('playerScore'));
//         playerScoreDisplay.textContent = playerScore;
//     }
//     if (localStorage.getItem('computerScore')) {
//         computerScore = parseInt(localStorage.getItem('computerScore'));
//         computerScoreDisplay.textContent = computerScore;
//     }
// };
// if (localStorage.getItem('playerScore')) {
//     playerScore = parseInt(localStorage.getItem('playerScore'));
// }
// if (localStorage.getItem('computerScore')) {
//     computerScore = parseInt(localStorage.getItem('computerScore'));
// }

// // Update scores display
// playerScoreDisplay.textContent = playerScore;
// computerScoreDisplay.textContent = computerScore;

// // Store scores in local storage
// window.onbeforeunload = () => {
//     localStorage.setItem('playerScore', playerScore);
//     localStorage.setItem('computerScore', computerScore);
// };

// Define variables to hold scores
let playerScore = 0;
let computerScore = 0;

// Function to update scores on all pages
function updateScores() {
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    // Store scores in local storage
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
}
function retrieveScores() {
    const playerScoreStr = localStorage.getItem("playerScore");
    const computerScoreStr = localStorage.getItem("computerScore");
    if (playerScoreStr !== null && computerScoreStr !== null) {
        playerScore = parseInt(playerScoreStr);
        computerScore = parseInt(computerScoreStr);
        updateScores(); // Update scores on page load
    }
}

// Function to determine the winner based on player and computer choices
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        window.location.href = `tie.html?player=${playerChoice}&computer=${computerChoice}`; // Redirect to tie page
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        updateScores();
        window.location.href = `win.html?player=${playerChoice}&computer=${computerChoice}`; // Redirect to win page
    } else {
        computerScore++;
        updateScores();
        window.location.href = `lose.html?player=${playerChoice}&computer=${computerChoice}`; // Redirect to lose page
    }
}

// Function to retrieve query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        player: params.get("player"),
        computer: params.get("computer")
    };
}

// Function to display selected images on win, lose, and tie pages
function displaySelectedImages() {
    const choices = getQueryParams();
    if (choices.player && choices.computer) {
        document.getElementById("player-choice-img").src = `${choices.player}.png`;
        document.getElementById("computer-choice-img").src = `${choices.computer}.png`;
    }
}

// Call displaySelectedImages function when the page loads
window.onload = displaySelectedImages;


// Function to handle player's choice
function playerChoice(choice) {
    console.log(`Player chose: ${choice}`);
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Generate computer's choice
    determineWinner(choice, computerChoice);
}


// Function to reload the game page
function tryAgain() {
    window.location.href = "game.html";
}

// Function to show rules popup
function showRules() {
    document.getElementById("rules-popup").style.display = "block";
}

// Function to close rules popup
function closeRules() {
    document.getElementById("rules-popup").style.display = "none";
}


// Call retrieveScores() function when the page loads
window.onload = retrieveScores;


