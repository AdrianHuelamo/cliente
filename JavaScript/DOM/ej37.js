window.onload = function() {
    let newtr = document.createElement("tr");
    let newtd = document.createElement("td");

    let oldtr = document.querySelectorAll("tr");
    let oldtd = document.querySelectorAll("td");

    let postr = oldtr[oldtr.length-1];
    let postd = oldtd[oldtd.length-1];

    newtr.appendChild(postr);
    newtd.appendChild(postd);




    // Obtener la tabla
    let table = document.querySelector('table');
    
    // Obtener todas las filas existentes
    let rows = table.getElementsByTagName('tr');
    
    // Añadir una nueva celda a cada fila existente (nueva columna)
    for (let i = 0; i < rows.length; i++) {
        let newCell = document.createElement('td');
        newCell.textContent = 'Nueva celda';
        rows[i].appendChild(newCell);
    }
    
    // Crear nueva fila
    let newRow = document.createElement('tr');
    
    // Añadir celdas a la nueva fila (incluyendo una más para la nueva columna)
    for (let i = 0; i <= rows[0].cells.length; i++) {
        let newCell = document.createElement('td');
        newCell.textContent = 'Nueva celda';
        newRow.appendChild(newCell);
    }
    
    // Añadir la nueva fila a la tabla
    table.appendChild(newRow);
}