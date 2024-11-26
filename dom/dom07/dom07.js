/* 
DOM 07. Write a function to create a table, accept row and column numbers, 
and input row-column numbers as cell content (e.g. Row-0 Column-0).
*/

const button = document.getElementById("button");

function createTable() {
  const rows = window.prompt("Provide a number of rows to create");
  const cols = window.prompt("Provide a number of columns to create");
  const table = document.createElement("table");

  for (i = 0; i < parseInt(rows); i++) {
    const tr = table.insertRow(i);
    for (c = 0; c < parseInt(cols); c++) {
      const td = tr.insertCell(c);
      td.innerHTML = `Row-${i + 1} Column-${c + 1}`;
    }
  }
  const form = document.getElementById("form");
  form.insertBefore(table, button);
}

button.addEventListener("click", createTable);
