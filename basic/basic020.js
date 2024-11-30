/* 
Basic 020. Check whether a given positive number is a multiple of 3 or 7.
*/

function isMultipleOfAny(number, multipleList) {
  for (const multipleNum of multipleList) {
    if (number % multipleNum === 0) {
      return true;
    }
  }
  return false;
}

function isMultipleOfAll(number, multipleList) {
  for (const multipleNum of multipleList) {
    if (number % multipleNum !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isMultipleOfAny(8, [3, 5]));
