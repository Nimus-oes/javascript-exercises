// DOM 05. Add rows to a table.

const insertButton = document.getElementById("insert");
const table = document.getElementById("sampleTable");
const tbody = table.firstElementChild;

// Version 1 - using the table object methods
function insertRow() {
  const rowCount = tbody.childElementCount;
  const row = table.insertRow(rowCount);
  const col1 = row.insertCell(0);
  const col2 = row.insertCell(1);
  col1.innerHTML = `Row${rowCount + 1} cell1`;
  col2.innerHTML = `Row${rowCount + 1} cell2`;
}

insertButton.addEventListener("click", insertRow);

// Version 2 - using the DOM node and appendChild method
// function createColumn(columnText) {
//   const column = document.createElement("td");
//   const colText = document.createTextNode(columnText);
//   column.appendChild(colText);
//   return column;
// }

// function createRow() {
//   const newRowNum = tbody.childElementCount + 1;
//   const row = document.createElement("tr");
//   const colNums = [1, 2];
//   colNums.forEach((cellNum) => {
//     const col = createColumn(`Row${newRowNum} cell${cellNum}`);
//     row.appendChild(col);
//   });
//   return row;
// }

// function insertRow() {
//   const row = createRow();
//   tbody.appendChild(row);
// }

// insertButton.addEventListener("click", insertRow);
