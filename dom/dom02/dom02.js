/* 
DOM 02. Get the values of First and Last names of the given form.
*/

const form = document.getElementById("form1");
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  const inputElements = [];
  event.preventDefault();
  for (const item of form.elements) {
    if (item.type === "text") {
      inputElements.push(item.value);
    }
  }
  console.log(inputElements);
});
