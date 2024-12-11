/*
Basic 063. Find the longest string from a given array of strings.  
*/

function longestStr(strArray) {
  let maxLength = 0;
  strArray.forEach((str) => (maxLength = Math.max(maxLength, str.length)));
  return strArray.filter((str) => str.length === maxLength)[0];
}

console.log(longestStr(["abc", "abcded"]));
