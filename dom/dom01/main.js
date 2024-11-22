/* 
DOM 01. Modify the style of the paragraph text through javascript code.
Clicking on the button the font, font size, and color of the paragraph text will be changed.
*/

const p = document.getElementById("text");
const button = document.getElementById("jsstyle");

function js_style() {
  p.style.fontSize = "2rem";
  p.style.color = "green";
  p.style.fontFamily = "Comic Sans MS";
}

button.addEventListener("click", js_style);
