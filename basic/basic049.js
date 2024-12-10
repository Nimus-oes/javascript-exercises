/* 
Basic 049.
Create a new string from a given string. 
This program removes the first and last characters of the string 
if the first or last character is 'P'. 
Return the original string if the condition is not satisfied.  
*/

function removeIfCharAt(string, char, index) {
  if (string.charAt(index) === char) {
    return index === 0
      ? string.substring(1)
      : string.substring(0, index) + string.substring(index + 1);
  } else {
    return string;
  }
}

function removeIfStartsOrEndsWith(string, char) {
  const mString = removeIfCharAt(string, char, 0);
  return removeIfCharAt(mString, char, mString.length - 1);
}

console.log(removeIfStartsOrEndsWith("Python", "P"));
