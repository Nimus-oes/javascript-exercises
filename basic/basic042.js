/* 
Basic 042. Create a new string without the first and last characters of a given string
*/

function rmvFirstLastChars(string) {
  return string.slice(1, -1);
}

console.log(rmvFirstLastChars("JavaScript"));
