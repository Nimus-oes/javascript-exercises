/*
Basic 056. 
Find the largest value between the first and last elements 
and set all the other elements to that value. 
Display the updated array.  
*/

function allMax(array) {
  const last = array.length - 1;
  return array.map(() => (array[0] > array[last] ? array[0] : array[last]));
}

console.log(allMax([1, 2, 3, 4, 5]));
