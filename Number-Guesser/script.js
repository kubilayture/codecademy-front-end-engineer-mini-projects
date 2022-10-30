let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
// console.log(generateTarget())
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (humanGuess < 0 || humanGuess > 9) {
        return alert('Number must be between 0 and 10');
    }
    else if (
        Math.abs(humanGuess - secretTarget) >=
        Math.abs(computerGuess - secretTarget)
    ) {
        return true;
    }
    return false;
};
const updateScore = (str) => {
    if (str === "human") {
        humanScore += 1;
    } else if (str === "computer") {
        computerScore += 1;
    }
};
const advanceRound = () => {
    currentRoundNumber += 1;
};
