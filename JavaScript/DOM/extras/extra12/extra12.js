window.onload = function() {
    const table = document.createElement("table");
    table.border = "1";

    let rows = parseInt(prompt("Enter number of rows: "));
    let cols = parseInt(prompt("Enter a number of colums: "));

    for (let i = 0; i < rows; i++) {
        const newRow = document.createElement("tr");
    

        for (let j = 0; j < cols; j++) {
            const newCol = document.createElement("td");
            newCol.textContent =  "Row" + (i + 1) + " " + "cell" + (j + 1);
            newRow.appendChild(newCol);
        }

        table.append(newRow);
    }
    document.getElementById("container").appendChild(table);
}