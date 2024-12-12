/*
Basic 070. 
Find the maximum absolute difference between 
any two adjacent elements of a given array of integers.
*/

function maxDiffBtwTwo(numArray) {
  // Initialize a variable to contain the maxium difference
  let maxDiff = 0;

  // Loop through array and get the difference between the looped element and its following element
  numArray.forEach((num, index, array) => {
    diff = Math.abs(num - array[index + 1]);
    maxDiff = diff > maxDiff ? diff : maxDiff;
  });

  return maxDiff;
}

console.log(maxDiffBtwTwo([13, 2, 3, 8, 9]));
