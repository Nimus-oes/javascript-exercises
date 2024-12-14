/*
Basic 074. 
Compute the sum of the absolute differences 
of consecutive numbers in a given array of integers. 
*/

function sumConsecNumsDiff(numArray) {
  let sum = 0;
  for (let i = 1; i < numArray.length; i++) {
    sum += Math.abs(numArray[i] - numArray[i - 1]);
  }
  return sum;
}

console.log(sumConsecNumsDiff([1, 2, 3, 2, -5]));
