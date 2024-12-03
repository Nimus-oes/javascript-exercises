/* 
Basic 029.
Check a set of three numbers.
if the three numbers are the same, return 30, 
otherwise return 20. 
If two numbers are the same, return 40.
*/

function getItemCounts(dataArray) {
  const counts = {};

  dataArray.forEach((element) => {
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  });

  return counts;
}

function check2or3Nums(x, y, z) {
  const duplicateArray = getItemCounts([x, y, z]);
  const duplicates = Object.values(duplicateArray);
  if (duplicates.includes(3)) {
    return 30;
  } else if (duplicates.includes(2)) {
    return 40;
  } else {
    return 20;
  }
}

console.log(check2or3Nums(8, 7, 18));
