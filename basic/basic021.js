/* 
Basic 021. 
Check whether two given integer values are in the range 50..99 (inclusive). 
Return true if either of them falls within the range.
*/

function isAnyInRange(numArray, rangeStart, rangeEnd) {
  for (const num of numArray) {
    if (num >= rangeStart && num <= rangeEnd) {
      return true;
    }
  }
  return false;
}

function isAllInRange(numArray, rangeStart, rangeEnd) {
  for (const num of numArray) {
    if (num < rangeStart || num > rangeEnd) {
      return false;
    }
  }
  return true;
}

console.log(isAnyInRange([11, 1], 10, 20));
