/* 
Basic 022. 
Check whether a string "script" appears 
at the 5th (index 4) position in a given string. 
If "script" appears in the string, return the string without "Script" 
otherwise return the original one.
*/

function isStringAt(fullString, stringToFind, index) {
  const sLength = stringToFind.length;
  return fullString.slice(index, index + sLength) === stringToFind;
}

function removeStringAt(fullString, stringToFind, index) {
  const sLength = stringToFind.length;
  const part1 = index === 0 ? "" : fullString.slice(0, index);
  const part2 = fullString.slice(index + sLength);
  return part1 + part2;
}

function findStringAndRemove(fullString, stringToFind, index) {
  console.log(isStringAt(fullString, stringToFind, index));
  return isStringAt(fullString, stringToFind, index)
    ? removeStringAt(fullString, stringToFind, index)
    : fullString;
}

console.log(findStringAndRemove("JavaScript", "Script", 4));
