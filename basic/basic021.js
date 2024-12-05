/* 
Basic 021. 
Check whether two given integer values are in the range 50..99 (inclusive). 
Return true if either of them falls within the range.
*/

function isAnyInRange(numArray, rangeStart, rangeEnd) {
  return numArray.some((num) => num >= rangeStart && num <= rangeEnd);
}

function isAllInRange(numArray, rangeStart, rangeEnd) {
  return numArray.every((num) => num >= rangeStart && num <= rangeEnd);
}

console.log(isAnyInRange([11, 1], 10, 20));
