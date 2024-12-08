/* 
Basic 041. Extract the first half of a even string.  
*/

function firstHalfStr(string) {
  if (string.length % 2 !== 0) {
    return "The number of characters must be even.";
  }
  return string.slice(0, string.length / 2);
}

function secondHalfStr(string) {
  if (string.length % 2 !== 0) {
    return "The number of characters must be even.";
  }
  return string.slice(string.length / 2);
}

console.log(firstHalfStr("Test"));
