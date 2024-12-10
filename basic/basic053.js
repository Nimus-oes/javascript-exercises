/* 
Basic 053. 
Check whether 1 appears in the first or last position 
of a given array of integers. 
The array length must be larger than or equal to 1.  
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

function firstOrLastMatch(array, value) {
  if (!isNumValidated(array.length, "equal or greater", 1)) {
    return "The array length must be larger than or equal to 1";
  }
  return array[0] === value || array[array.length - 1] === value;
}

console.log(firstOrLastMatch([1, 2, 3], 3));
