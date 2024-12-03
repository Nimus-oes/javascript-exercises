/* 
Basic 030. 
Check whether three given numbers are increasing in strict or in soft mode.

- Strict mode: 10, 15, 31
- Soft mode: 24, 22, 31 or 22, 22, 31

In strict mode, the numbers must strictly increase, like 10, 15, 31. 
In soft mode, the numbers can increase 
but may have equal adjacent values, like 24, 22, 31 or 22, 22, 31.
*/

function isStrictIncr(numArray) {
  let prevNum = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] <= prevNum) {
      return false;
    }
    prevNum = numArray[i];
  }
  return true;
}

function isSoftIncr(numArray) {
  let prevNum = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] < prevNum) {
      if (i === numArray.length - 1 || numArray[i - 1] > numArray[i + 1]) {
        return false;
      }
      prevNum = numArray[i];
    }
  }
  return true;
}

function softOrStrictIncr(numArray) {
  if (isStrictIncr(numArray)) {
    return "Strict";
  } else if (isSoftIncr(numArray)) {
    return "Soft";
  }
}

console.log(softOrStrictIncr([24, 22, 31]));
