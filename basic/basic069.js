/*
Basic 069.
Find the maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order) in a given array of positive integers. 
*/

function consecNumsMaxSum(numArray, digits) {
  let maxSum = 0;
  numArray.forEach((num, index, array) => {
    let sum = num;
    for (let i = 1; i < digits; i++) {
      sum += array[index + i];
    }
    maxSum = sum > maxSum ? sum : maxSum;
  });

  return maxSum;
}

console.log(consecNumsMaxSum([1, 2, 3, 14, 5], 2));
