/*
Basic 078.
Check if there is at least one common element 
in two given arrays of integers. 
*/

function haveCommonItems(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

console.log(haveCommonItems([1, 2, 7], [3, 4, 7]));
