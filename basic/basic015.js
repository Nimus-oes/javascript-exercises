/* 
Basic 015. Check two given integers whether one is positive and another one is negative.
*/

function checkPosNeg(x, y) {
  return (x > 0 && y < 0) || (x < 0 && y > 0);
}

console.log(checkPosNeg(-3, 4));
