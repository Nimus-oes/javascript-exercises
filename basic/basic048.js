/* 
Basic 048. 
Display the city name if the string begins with "Los" or "New",
otherwise return blank.  
*/

function stringStartsWithAny(string, wordsArray) {
  return wordsArray.some((word) => string.startsWith(word));
}

function displayIfStartsWithAny(string, wordsArray) {
  return stringStartsWithAny(string, wordsArray) ? string : "";
}

console.log(displayIfStartsWithAny("Chicago", ["Los", "New"]));
