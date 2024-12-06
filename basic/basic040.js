/* 
Basic 040. 
Create an updated string with 4 copies of the last 3 characters 
of a given original string. The string length must be 3 and above.  
*/

function repeatLastChars(string, lastFrom, copies) {
  if (string.length < lastFrom) {
    return "The string length must be equal or greater than the specified last characters.";
  }

  const copyRangeStart = string.length - lastFrom;
  const originalPart =
    copyRangeStart > 0 ? string.slice(0, copyRangeStart) : "";
  const copiedPart = string.slice(copyRangeStart).repeat(copies);
  return originalPart + copiedPart;
}

console.log(repeatLastChars("Python", 3, 4));
