/* 
Basic 031. Check two integer values and return true 
if either one is 15 or if their sum or difference is 15.
*/

function sumMatch(x, y, sum) {
  return x + y === sum;
}

function diffMatch(x, y, diff) {
  return Math.abs(x - y) === diff;
}

function anyMatch(x, y, match) {
  return x === match || y === match;
}

function checkNumsAgainst([x, y], num) {
  return anyMatch(x, y, num) || sumMatch(x, y, num) || diffMatch(x, y, num);
}

console.log(checkNumsAgainst([15, 9], 15));
