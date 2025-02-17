/*
Basic 077. 
Check whether it is possible to rearrange the characters 
of a given string to match another given string. 
*/

function toLowerSortedArray(str) {
  return str.toLowerCase().split("").sort();
}

function canRearrange(str1, str2) {
  return (
    JSON.stringify(toLowerSortedArray(str1)) ===
    JSON.stringify(toLowerSortedArray(str2))
  );
}

console.log(canRearrange("abc", "bac"));
