/* 
DOM 08. Remove items from a drop-down list.
*/

const button = document.getElementById("button");

function removecolor() {
  const dropdown = document.getElementById("colorSelect");
  dropdown.remove(dropdown.selectedIndex);
}

button.addEventListener("click", removecolor);
