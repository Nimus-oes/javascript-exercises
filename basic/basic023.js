/* 
Basic 023. Find the largest of three given integers.
*/

function getLargestInt(numArray) {
  let largest = numArray[0];
  numArray.forEach((num) => {
    largest = num > largest ? num : largest;
  });

  return largest;
}

console.log(getLargestInt([1, 13, -90]));
