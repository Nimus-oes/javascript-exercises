/* 
Basic 019. 
Create another string from a given string 
with the first character of the given string 
added to the front and back.
*/

function wrapWithFirstChar(string) {
  const firstChar = string.charAt(0);
  return firstChar + string + firstChar;
}

console.log(wrapWithFirstChar("test"));
