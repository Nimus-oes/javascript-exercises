/* 
Basic 016. 
Create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string.
*/

function addPy(string) {
  return string.toLowerCase().slice(0, 2) === "py" ? string : "Py" + string;
}

console.log(addPy("test"));
