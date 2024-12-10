/* 
Basic 050. 
Create a new string using the first and last n characters 
from a given string. The string length must be 
larger than or equal to n.  
*/

function isNumValidated(value, state, criteria) {
  const keywords = {
    equal: value === criteria,
    "equal or greater": value >= criteria,
    "equal or less": value <= criteria,
    greater: value > criteria,
    less: value < criteria,
  };
  return keywords[state];
}

function getFirstLastChars(string, digits) {
  if (!isNumValidated(string.length, "equal or greater", digits)) {
    return `The string length must be larger than or equal to ${digits}`;
  }

  return string.slice(0, digits) + string.slice(-digits);
}

console.log(getFirstLastChars("J", "2"));
