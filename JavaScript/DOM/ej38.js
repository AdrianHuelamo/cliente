window.onload = function() {
  const table = document.getElementById("myTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row${i + 1} cell${rows[i].children.length + 1}`;
    rows[i].appendChild(newCell);
  }
  const newRow = document.createElement("tr");
  const numCols = rows[0].children.length;
  
  for (let j = 0; j < numCols; j++) {
    const newCell = document.createElement("td");
    newCell.textContent = `Row${rows.length + 1} cell${j + 1}`;
    newRow.appendChild(newCell);
  }
  
  table.appendChild(newRow);

  //Ej38
  function updateTable(row, col, text) {
    const selectedRow = rows[row - 1];
    const selectedCell = selectedRow.cells[col - 1];
    selectedCell.textContent = text;
  }

  let fRow = parseInt(prompt("Enter the number of a row: "));
  let fColum = parseInt(prompt("Enter the number of a colum: "));
  let text = prompt("Enter the text: ");

const fTable = document.querySelector("table");
if (!fTable || fRow < 1 || fRow > rows.length || fColum < 1 || fColum > numCols) {
  let error = document.createElement("p");
  error.textContent("Table not exist or row or colum not found");
  document.body.appendChild(error);
} else {
  updateTable(fRow, fColum, text);
}
}