/* 
Basic 047. 
Test whether a string ends with " Script". 
The string length must be greater than or equal to 6. 
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

function stringEndsWith(string, word) {
  if (!isNumValidated(string.length, "equal or greater", word.length)) {
    return `The string length must be equal to or greater than ${word.length}`;
  }

  return string.endsWith(word);
}

console.log(stringEndsWith("testScript", "Script"));
