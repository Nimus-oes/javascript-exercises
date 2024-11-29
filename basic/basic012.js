/*
Basic 012. 
Compute the sum of the two given integers. 
If the two values are the same, then return triple their sum.
*/

const num1 = 7;
const num2 = 7;

function sumOrTriple(x, y) {
  return x === y ? (x + y) * 3 : x + y;
}

console.log(sumOrTriple(num1, num2));
