/*
Basic 044. 
Move the last three characters to the start of a given string. 
The string length must be greater than or equal to three.  
*/

function moveCharsWithin(string, fromRangeArray, toIndex) {
  const rangeStart = fromRangeArray[0];
  const rangeEnd = fromRangeArray[1];
  if (rangeStart < 0) {
    return "The range exceeds string length.";
  }
  const charsToMove = string.substring(rangeStart, rangeEnd);
  const newFirstPart = toIndex !== 0 ? string.substring(0, toIndex) : "";
  const newLastPart =
    toIndex < rangeStart ? string.substring(toIndex, rangeStart) : "";
  return newFirstPart + charsToMove + newLastPart;
}

function moveLastCharsTo(string, lastCharsDigits, toIndex) {
  const rangeStart = string.length - lastCharsDigits;
  const rangeEnd = rangeStart + lastCharsDigits + 1;
  return moveCharsWithin(string, [rangeStart, rangeEnd], toIndex);
}

function moveLastCharsToFront(string, lastCharsDigits) {
  return moveLastCharsTo(string, lastCharsDigits, 0);
}

console.log(moveLastCharsToFront("Winter", 3));
