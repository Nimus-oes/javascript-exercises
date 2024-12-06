/* 
Basic 037. Count the number of vowels in a given string.
*/

function getVowelCounts(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringArray = string.split("");
  const vowelsInString = stringArray.filter((char) =>
    vowels.includes(char.toLowerCase()),
  );
  return vowelsInString.length;
}

console.log(getVowelCounts("Python"));
