/* 
Basic 043. Concatenate two strings except for their first character.  
*/

function concatNoFirstChars(stringArray) {
  return stringArray.reduce((result, string) => {
    return result + string.slice(1);
  }, "");
}

console.log(concatNoFirstChars(["Python", "JavaScript"]));
