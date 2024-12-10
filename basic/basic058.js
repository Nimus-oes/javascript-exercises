/*
Basic 058. 
Test whether an array of integers of length 2 contains 1 or 3.  
*/

function includeAny(array, valueArray) {
  return valueArray.some((val) => array.includes(val));
}

console.log(includeAny([2, 2, 1], [1, 3]));
