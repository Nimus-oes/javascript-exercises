/* 
Basic 013. 
Compute the absolute difference between a specified number and 19. 
Return triple the absolute difference 
if the specified number is greater than 19.
*/

function getDiffTriple(x, y) {
  const absDiff = Math.abs(x - y);
  return x > y ? absDiff * 3 : absDiff;
}

console.log(getDiffTriple(22, 19));
