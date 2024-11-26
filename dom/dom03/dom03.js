// DOM 03. Set paragraph background color.

const trigger = document.getElementById("trigger");
const pElements = document.querySelectorAll("body p");

function set_background() {
  pElements.item(0).style["background-color"] = "blue";
  pElements.item(1).style["background-color"] = "green";
}

trigger.addEventListener("click", set_background);
