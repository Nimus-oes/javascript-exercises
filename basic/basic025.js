/* 
Basic 025. 
Check whether a specified character exists between the 2nd and 4th positions in a given string.
*/

function isCharBetween(fullString, charToFind, positionArray) {
  const sliced = fullString.slice(positionArray[0] - 1, positionArray[1]);
  return sliced.includes(charToFind);
}

console.log(isCharBetween("JavaScript", "S", [2, 4]));
