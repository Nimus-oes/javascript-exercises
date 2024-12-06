/* 
Basic 038. Check whether a given string contains an equal number of p's and t's.  
*/

function findChars(string, char) {
  return string.split("").filter((element) => element === char);
}

function charCountsEqual(string, x, y) {
  return findChars(string, x).length === findChars(string, y).length;
}

console.log(charCountsEqual("paattpss", "p", "t"));
