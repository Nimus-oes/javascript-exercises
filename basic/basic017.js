/* 
Basic 017. 
Remove a character at the specified position in a given string 
and return the modified string.
*/

function removeCharAt(string, index) {
  const partFirst = string.substring(0, index);
  const partSecond = string.substring(index + 1);
  return partFirst + partSecond;
}

console.log(removeCharAt("test", 0));
