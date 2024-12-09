/* 
Basic 045. 
Create a string using the middle three characters 
of a given string of odd length. 
The string length must be greater than or equal to three.  
*/

function isLengthOdd(data) {
  const value = typeof data === "number" ? data : data.length;
  return value % 2 != 0;
}

function validateLength(string, state, num) {
  const strLength = string.length;
  const keywords = {
    equal: strLength === num,
    "equal or greater": strLength >= num,
    "equal or less": strLength <= num,
    greater: strLength > num,
    less: strLength < num,
  };
  return keywords[state];
}

function getMiddleChars(string, digits) {
  if (!validateLength(string, "equal or greater", digits)) {
    return `String length must be equal to or greater than ${digits}`;
  }

  if (isLengthOdd(string) && !isLengthOdd(digits)) {
    return "The string length is odd. The number of middle characters should also be odd.";
  } else if (!isLengthOdd(string) && isLengthOdd(digits)) {
    return "The string length is even. The number of middle characters should also be even.";
  }

  const middle = Math.floor(string.length / 2);
  const middleWings = Math.floor(digits / 2);
  const rangeStart = middle - middleWings;
  const rangeEnd = isLengthOdd(string)
    ? middle + middleWings + 1
    : middle + middleWings;

  return string.slice(rangeStart, rangeEnd);
}

console.log(getMiddleChars("HTML5", 3));
