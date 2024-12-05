/* 
Basic 020. Check whether a given positive number is a multiple of 3 or 7.
*/

function isMultipleOfAny(num, multipleArray) {
  return multipleArray.some((multiple) => num % multiple === 0);
}

function isMultipleOfAll(num, multipleArray) {
  return multipleArray.every((multiple) => num % multiple === 0);
}

console.log(isMultipleOfAny(10, [3, 5]));
