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
}