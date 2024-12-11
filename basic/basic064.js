/*
Basic 064. 
Replace each character in a given string 
with the next in the English alphabet. 
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function replaceWithNextABC(string) {
  const z_to_a = { z: 97, Z: 65 };
  const strArray = string.split("");
  const replacedCodes = strArray.map((char) =>
    char === "z" || char === "Z" ? z_to_a[char] : char.charCodeAt() + 1,
  );
  const replacedStr = replacedCodes.map((code) => String.fromCharCode(code));
  return replacedStr.join("");
}

console.log(replaceWithNextABC("xyz"));
