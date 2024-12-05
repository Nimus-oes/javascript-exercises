/* 
Basic 033. Reverse a given string.
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("w3resource"));
