/*
Basic 062. Add two digits of a given positive integer of length two. 
*/

function addAllDigits(num) {
  const strArray = String(num).split("");
  return strArray.reduce((total, str) => total + Number(str), 0);
}

console.log(addAllDigits(25));
