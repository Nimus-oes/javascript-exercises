/*
Find the number of inversions of a given array of integers. 
Two elements of the array a stored at positions i and j 
form an inversion if a[i] > a[j] and i < j.
*/

function countInversions(array) {
  let counter = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) counter++;
    }
  }
  return counter;
}

console.log(countInversions([10, 30, 20, -10]));
