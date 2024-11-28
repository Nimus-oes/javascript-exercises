/* 
Basic 008. Write a program that takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. 
It displays a message "Good Work" if the input matches the guess number,
otherwise "Not matched".
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isUserRight(input, number) {
  if (input === number) {
    alert(`Good work! The number was ${number}`);
    return true;
  } else {
    alert("Not matched");
    return false;
  }
}

function executeGuessNumber() {
  const number = getRndInteger(1, 10);
  let isFinished = false;

  while (!isFinished) {
    const userInput = window.prompt("Guess the number.");
    isFinished = isUserRight(parseInt(userInput), number);
  }
}

executeGuessNumber();
