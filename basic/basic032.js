/* 
Basic 032. 
Check two given non-negative integers if one (not both) is a multiple of 7 or 11.
*/

function isMultipleOfAny(num, multipleArray) {
  return multipleArray.some((multiple) => num % multiple === 0);
}

function checkOneMultiple(numArray, multipleArray) {
  const result = numArray.filter((num) => isMultipleOfAny(num, multipleArray));
  return result.length === 1;
}

console.log(checkOneMultiple([16, 20], [7, 11]));
