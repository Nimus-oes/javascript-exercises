/*
Basic 073. Replace sepcified numbers in an array of integers with a specified value.
*/

function replaceMatch(numArray, oldVal, newVal) {
  return numArray.map((num) => (num === oldVal ? newVal : num));
}

console.log(replaceMatch([1, 2, 3, 2, 2, 8, 1, 9], 3, 5));
