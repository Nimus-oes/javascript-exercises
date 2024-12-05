/* 
Basic 024. Find the closest value to 100 from two numerical values.
*/

function getClosestTo(target, numArray) {
  // Set the initial value of the closest number as the first item of numArray
  const closet = [Math.abs(numArray[0] - target), numArray[0]];

  numArray.forEach((num) => {
    const diff = Math.abs(num - target);
    if (diff < closet[0]) {
      closet[0] = diff;
      closet[1] = num;
    }
  });

  return closet[1];
}

console.log(getClosestTo(100, [-10, -1]));
