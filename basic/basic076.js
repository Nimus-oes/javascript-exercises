/*
Basic 076. 
Change the case of the minimum number of letters 
to make a given string written in upper case or lower case. 
Fox example "Write" will be "write" and "PHp" will be "PHP"
*/

function isUpper(char) {
  return char >= "A" && char <= "Z";
}

function isLower(char) {
  return char >= "a" && char <= "z";
}

function getCaseNums(string) {
  let upper = 0;
  let lower = 0;
  for (const char of string) {
    if (isUpper(char)) upper++;
    else if (isLower(char)) lower++;
  }
  return [upper, lower];
}

function changeMinCases(string) {
  const [upper, lower] = getCaseNums(string);
  return upper > lower ? string.toUpperCase() : string.toLowerCase();
}

console.log(changeMinCases("PHp"));
