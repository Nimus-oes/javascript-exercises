/* 
Basic 018. 
Create a new string from a given string 
by changing the position of the first and last characters. 
The string length must be greater than or equal to 1.
*/

function swapFirstLastChars(string) {
  if (string.length <= 1) {
    return string;
  }
  const firstChar = string.slice(0, 1);
  const lastChar = string.slice(-1);
  return lastChar + string.slice(1, -1) + firstChar;
}

console.log(swapFirstLastChars("string"));
