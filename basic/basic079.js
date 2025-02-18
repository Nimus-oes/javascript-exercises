/*
Basic 079.
Check whether a given string contains only English letters 
and no two uppercase and no two lowercase letters 
are in adjacent positions.
*/

// [TODO] Improve this function with regular expression
function isEnglish(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function isLower(char) {
  return char >= "a" && char <= "z";
}

function isUpper(char) {
  return char >= "A" && char <= "Z";
}

function isCaseAlternating(string) {
  // Loop through till the second last digit of the string
  for (let i = 0; i < string.length - 1; i++) {
    if (
      !isEnglish(string[i]) ||
      (isLower(string[i]) && isLower(string[i + 1])) ||
      (isUpper(string[i]) && isUpper(string[i + 1]))
    ) {
      return false;
    }
  }

  return isEnglish(string[string.length - 1]); // Ensure the last character is also valid
}

console.log(isCaseAlternating("TeSt"));
