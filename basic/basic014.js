/* 
Basic 014. Check a pair of numbers and return true 
if one of the numbers is 50 or if their sum is 50.
*/

function is50orSum50(x, y) {
  return x === 50 || y === 50 || x + y === 50;
}

console.log(is50orSum50(20, 30));
