/* 
Basic 051. 
Compute the sum of three elements of a given array 
of integers of length 3.  
*/

function getSum(numArray) {
  return numArray.reduce((total, num) => total + num, 0);
}

console.log(getSum([1, 2, 3]));
