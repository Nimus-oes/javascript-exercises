/*
Basic 060. 
Test whether a given array of integers contains 30 or 40 twice. 
The array length should be 0, 1, or 2.  
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

function isDuplicateAny(array, valueArray) {
  if (![0, 1, 2].some((val) => isNumValidated(array.length, "equal", val))) {
    return "The array length should be 0, 1, or 2.";
  }

  const count = {};
  array.forEach((elem) =>
    count[elem] === undefined ? (count[elem] = 1) : (count[elem] += 1),
  );

  return valueArray.some((val) => count[val] >= 2);
}

console.log(isDuplicateAny([30, 30], [30, 40]));
