/*
Basic 065. 
Divide a given array of positive integers into two parts. 
First element belongs to the first part, 
second element belongs to the second part, 
and third element belongs to the first part and so on. 
Now compute the sum of two parts and store it in an array of size two. 
*/

function getSum(numArray) {
  return numArray.reduce((total, num) => total + num, 0);
}

function divTwoParts(numArray) {
  let firstPart = 0;
  let secondPart = 0;
  numArray.forEach((num, index) => {
    if ((index + 1) % 2 !== 0) {
      firstPart += num;
    } else {
      secondPart += num;
    }
  });

  return [firstPart, secondPart];
}

console.log(divTwoParts([1, 2, 3]));
