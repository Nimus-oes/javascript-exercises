/* 
DOM 09. Count and display dropdown list items in an alert window.
*/

const button = document.getElementById("button");

function getOptions() {
  const dropdown = document.getElementById("mySelect");
  const count = dropdown.childElementCount;
  const options = dropdown.options;
  let message = `Count: ${count} \nItems: \n`;
  for (i = 0; i < count; i++) {
    message += options[i].text + "\n";
  }

  alert(message);
}
button.addEventListener("click", getOptions);
