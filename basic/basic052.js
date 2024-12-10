/*
Basic 052. 
Rotate the elements to the left in a given array of integers of length 3.
*/

function rotateArray(array) {
  return array.map((element, index, arr) =>
    index === array.length - 1 ? arr[0] : arr[index + 1],
  );
}

console.log(rotateArray([1, 2, 3]));
