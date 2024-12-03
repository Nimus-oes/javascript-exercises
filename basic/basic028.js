/* 
Basic 028. 
Check from two given integers whether one of them is 8 
or their sum or difference is 8.
*/

function sumMatch(x, y, sumValue) {
  return x + y === sumValue;
}

function diffMatch(x, y, diffValue) {
  return Math.abs(x - y) === diffValue;
}

function evalNumsAgainst(x, y, num) {
  return [x, y].includes(num) || sumMatch(x, y, num) || diffMatch(x, y, num);
}

console.log(evalNumsAgainst(17, 18, 8));
