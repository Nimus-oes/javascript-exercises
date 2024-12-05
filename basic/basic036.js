/* 
Basic 036. Sort letters of a given string in alphabetical order.
*/

function sortLettersAsc(string) {
  return string.split("").sort().join("");
}

console.log(sortLettersAsc("cba"));
