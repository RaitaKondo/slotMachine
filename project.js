//collect the deposit money
//determine number of the lines to bet on
//collect a bet amount
//spin the slot machine
//check if the user win
// give the user their winnings
// play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  // symbols = [[ a,a ],[ b,b,b,b ],[ c,c,c,c ]]

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
  // reels = [[a,b,b],[c,d,a],[b,d,d]]
};

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
  // reels = [[a,b,b],[c,d,a],[b,d,d]]
  // rows=[[a,c,b],[b,d,d],[b,a,d]]
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";

    for (const [i, symbol] of row.entries()) {
      rowString += symbol;

      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
    //rowString = "a | c | b"
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
// console.log(reels);
const rows = transpose(reels);
// console.log(rows);

printRows(rows);
