/* 
Basic 024. Find the closest value to 100 from two numerical values.
*/

function getClosestTo(target, numArray) {
  const closet = [Math.abs(numArray[0] - target), numArray[0]];

  numArray.forEach((num) => {
    if (target - num < closet[0]) {
      closet[0] = Math.abs(num - target);
      closet[1] = num;
    }
  });

  return closet[1];
}

console.log(getClosestTo(100, [-10, -1]));
