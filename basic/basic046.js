/* 
Basic 046. 
Concatenate two strings and return the result. 
If the length of the strings does not match, 
then remove the extra characters from the longer string.  
*/

function trimCombineStr(x, y) {
  const xlength = x.length;
  const ylength = y.length;
  const min = Math.min(xlength, ylength);
  return x.substring(xlength - min) + y.substring(ylength - min);
}

console.log(trimCombineStr("Python", "JS"));
