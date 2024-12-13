/*
Basic 071. Find the maximum absolute difference 
between any two elements in an array.
*/

function maxDiffBtwAnyTwo(numArray) {
  // Initialize a variable to contain maximum difference
  let maxDiff = 0;

  // (1) Loop through the array
  numArray.forEach((num, index, array) => {
    // (2) Loop through other elements only if it's not the last element
    if (index !== array.length - 1) {
      // Exclude the previously looped elements in action (1)
      for (let i = index + 1; i < array.length; i++) {
        diff = Math.abs(num - array[i]);
        maxDiff = Math.max(maxDiff, diff);
      }
    }
  });

  return maxDiff;
}

console.log(maxDiffBtwAnyTwo([13, 2, 3, 8, 9]));
