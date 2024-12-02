/* 
Basic 026. 
Produce a new string that has the first 3 characters 
in lower case from a given string. 
If the string length is less than 3, 
convert all the characters to upper case.
*/

function firstCharsToLower(string, charDigits) {
  return string.slice(0, charDigits).toLowerCase() + string.slice(charDigits);
}

const testString = "JAVAScript";
const result =
  testString.length <= 3
    ? testString.toUpperCase()
    : firstCharsToLower(testString, 3);

console.log(result);
