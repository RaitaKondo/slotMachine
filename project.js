//collect the deposit money
//determine number of the lines to bet on
//collect a bet amount
//spin the slot machine
//check if the user win
// give the user their winnings
// play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || 3 < numberOfLines || numberOfLines <= 0) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per lines: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || balance / lines < numberBet || numberBet <= 0) {
      console.log("Invalid number of bet, try again.");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();

const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
