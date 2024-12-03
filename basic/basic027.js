/* 
Basic 027. 
Compute the sum of the two given integers. 
If the sum is in the range 50..80 return 65, 
otherwise return 80.
*/

function isNumberInRange(num, rangeStart, rangeEnd) {
  return num >= rangeStart && num <= rangeEnd;
}

function sortSum(x, y) {
  return isNumberInRange(x + y, 50, 80) ? 65 : 80;
}

console.log(sortSum(90, 80));
