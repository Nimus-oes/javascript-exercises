/*
Basic 068. 
Find the k<sup>th</sup> greatest element in a given array of integers.  
*/

function kthGreatest(numArray, k) {
  const ordered = numArray.sort((a, b) => a - b);
  return numArray[k - 1];
}

console.log(kthGreatest([1, 2, 3, 4, 5], 3));
