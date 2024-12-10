/*
Basic 055.
Reverse the elements of a given array of integers of length 3.  
*/

function reverseOrder(array) {
  const lastIndex = array.length - 1;
  return array.map((element, index, arr) => arr[lastIndex - index]);
}

console.log(reverseOrder([1, 2, 3]));
