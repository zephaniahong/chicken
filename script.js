// // Scissors Paper Stone
// // Random Number Generator 1 to 3
// // 1 = Scissors
// // 2 = Paper
// // 3 = Rock
// // Program will detect if number is more than 3 and non-numbered inputs

console.log(`1 = Scissors`);
console.log(`2 = Paper`);
console.log(`3 = Rock`);
var winTimes = Number(0);

// Computer generates a number
function comNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

// Lock in computer's choice
var comChoice = comNumber();
console.log(`Computer choice`);
console.log(comChoice + " " + comHand(comChoice));

// Convert computer choice to hand
function comHand() {
  if (comChoice == 1) {
    return "Scissors";
  }
  if (comChoice == 2) {
    return "Paper";
  }
  if (comChoice == 3) {
    return "Rock";
  }
}
// Player inputs number to choose hand
function numToHand(input) {
  if (input == Number(1)) {
    return "Scissors";
  }
  if (input == Number(2)) {
    return "Paper";
  }
  if (input == Number(3)) {
    return "Rock";
  }
}

function isNotValid(input) {
  // input should be a number between 1 and 3 inclusive
  return isNaN(Number(input)) || input > 3 || input < 1;
}
function userWon(input) {
  return (
    (input == 1 && comChoice == 2) ||
    (input == 2 && comChoice == 3) ||
    (input == 3 && comChoice == 1)
  );
}

function resetGame() {
  comChoice = comNumber();
}

function main(input) {
  // Input validation
  if (isNotValid(input)) {
    console.log(isNaN(input));
    return `Choose 1 for Scissors, 2 for Paper, 3 for Rock.`;
  } else {
    // Sentence to state choices of player and computer
    var result = "";
    if (userWon(input)) {
      winTimes += 1;
      result = "Win! ";
    } else if (input == comChoice) {
      result = `Draw! `;
    } else {
      result = `Lose! `;
    }
    result =
      result +
      `You chose ${numToHand(Number(input))}, computer chose ${comHand(
        comChoice
      )}. You have won a total of ${winTimes} times. `;
    // }
    // Result function to check for win/lose/draw
    resetGame();
    console.log(`New Computer choice`);
    console.log(comChoice + " " + comHand(comChoice));
    return result;
    // return result(numToHand(Number(input)), comChoice) + resultText();
  }
}
