/*
Basic 059. 
Test whether an array of integers of length 2 does not contain 1 and 3.  
*/

function includeAny(array, valueArray) {
  return valueArray.every((val) => !array.includes(val));
}

console.log(includeAny([2, 2, 3], [1, 3]));
