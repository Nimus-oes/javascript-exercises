/*
Basic 054. 
Check whether the first and last elements are the same 
in a given array of integers of length 3.  
*/

function isFirstLastSame(array) {
  return array[0] === array[array.length - 1];
}

console.log(isFirstLastSame([1, 2, 1]));
