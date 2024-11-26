/* DOM 04. Get the value of the href, hreflang, rel, target, 
and type attributes of the specified link.
*/

const button = document.getElementById("button");
const aElement = document.getElementById("w3r");

function getAttributes() {
  console.log(aElement.href);
  console.log(aElement.hreflang);
  console.log(aElement.rel);
  console.log(aElement.target);
  console.log(aElement.type);
}

button.addEventListener("click", getAttributes);
