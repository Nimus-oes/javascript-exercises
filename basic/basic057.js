/*
Basic 057. 
Create an array taking the middle elements 
of the two arrays of integer and each length 3.  
*/

function isOdd(num) {
  return num % 2 !== 0;
}

function getMiddleElemFrom(arrayX, arrayY) {
  if (![arrayX, arrayY].every((array) => isOdd(array.length))) {
    return "The array length must be odd to get a middle element.";
  }
  return [arrayX, arrayY].map((array) => array[Math.floor(array.length / 2)]);
}

console.log(getMiddleElemFrom([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"]));
