/* 
Basic 034. 
Capitalize the first letter of each word in a given string.
*/

function capFirstLetterAll(string) {
  const stringArray = string.split(" ");
  const newString = stringArray.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1),
  );
  return newString.join(" ");
}

console.log(
  capFirstLetterAll(
    "Write a JavaScript program to capitalize the first letter of each word of a given string.",
  ),
);
