/* 
DOM 06. Write a function that accepts a row, column (to identify a particular cell) 
and a string to update the cell's contents. 
*/

const button = document.getElementById("button");

function changeContent() {
  const table = document.getElementById("myTable");
  const row = window.prompt("Provide a row number (0, 1, 2)");
  const col = window.prompt("Provide a column number (0, 1)");
  const content = window.prompt("Provide a content to apply");
  const cell = table.rows[parseInt(row)].cells[parseInt(col)];
  cell.innerHTML = content;
}

button.addEventListener("click", changeContent);
