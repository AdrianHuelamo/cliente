window.onload = function () {
    // 1. LA BASE DE DATOS (Array de Objetos)
    const players = [
        { id: 7, image: "chris_jones.jpg", name: "Chris", surname: "Jones", position: "Point Guard", dateOfBirth: "1993-04-10", pointsPerGame: 12.5 },
        { id: 16, image: "stefan_jovic.jpg", name: "Stefan", surname: "Jovic", position: "Point Guard", dateOfBirth: "1990-11-03", pointsPerGame: 8.3 },
        { id: 5, image: "sergio_de_larrea.jpg", name: "Sergio", surname: "De Larrea", position: "Point Guard", dateOfBirth: "2004-02-18", pointsPerGame: 4.0 },
        { id: 8, image: "jean_montero.jpg", name: "Jean", surname: "Montero", position: "Shooting Guard", dateOfBirth: "2003-07-05", pointsPerGame: 11.5 },
        { id: 0, image: "brancou_badio.jpg", name: "Brancou", surname: "Badio", position: "Shooting Guard", dateOfBirth: "1999-02-17", pointsPerGame: 9.1 },
        { id: 6, image: "xabier_lopez_arostegui.jpg", name: "Xabier", surname: "López-Arostegui", position: "Shooting Guard", dateOfBirth: "1997-05-19", pointsPerGame: 7.8 },
        { id: 37, image: "semi_ojeleye.jpg", name: "Semi", surname: "Ojeleye", position: "Small Forward", dateOfBirth: "1994-12-05", pointsPerGame: 10.8 },
        { id: 2, image: "josep_puerto.jpg", name: "Josep", surname: "Puerto", position: "Small Forward", dateOfBirth: "1999-03-04", pointsPerGame: 5.5 },
        { id: 77, image: "nate_sestina.jpg", name: "Nate", surname: "Sestina", position: "Power Forward", dateOfBirth: "1997-05-12", pointsPerGame: 6.3 },
        { id: 4, image: "jaime_pradilla.jpg", name: "Jaime", surname: "Pradilla", position: "Power Forward", dateOfBirth: "2001-01-03", pointsPerGame: 8.9 },
        { id: 3, image: "nathan_reuvers.jpg", name: "Nathan", surname: "Reuvers", position: "Power Forward", dateOfBirth: "1998-09-22", pointsPerGame: 7.2 },
        { id: 24, image: "matt_costello.jpg", name: "Matt", surname: "Costello", position: "Center/Forward", dateOfBirth: "1993-08-05", pointsPerGame: 12.3 },
        { id: 22, image: "ethan_happ.jpg", name: "Ethan", surname: "Happ", position: "Center", dateOfBirth: "1996-05-07", pointsPerGame: 10.2 },
    ];
  
    // 2. PREPARAR EL HTML
    let body = document.querySelector("body");
    let container = document.createElement("div");
    body.appendChild(container);
  
    // Función para borrar las cartas antes de volver a pintar
    function cleanContainer() {
      container.innerHTML = "";
    }
  
    // Función auxiliar para calcular edad
    function calculateAge(dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const diff = Date.now() - dob.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
    // 3. FUNCIÓN PARA DIBUJAR UNA SOLA CARTA (CARD)
    function drawPlayer(player) {
      const age = calculateAge(player.dateOfBirth);
      let card = document.createElement("div");
      card.className = "card";
      card.dataset.id = player.id; // Guardamos el ID por si queremos borrarlo luego
      
      let img = document.createElement("img");
      img.src = "imgs/" + player.image;
      
      let name = document.createElement("h2");
      name.innerText = player.name + " " + player.surname;
      
      let p1 = document.createElement("p");
      p1.innerText = "Position: " + player.position;
      
      let p2 = document.createElement("p");
      p2.innerText = "Age: " + age;
      
      let p3 = document.createElement("p");
      p3.innerText = "PPG: " + player.pointsPerGame + " points";
  
      // Añadimos todo a la carta
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
  
      // Añadimos la carta al contenedor principal
      container.appendChild(card);
    }
  
    // 4. FUNCIÓN PARA RECORRER Y DIBUJAR VARIOS JUGADORES
    function drawAllPlayers(listToDraw) {
      // Recorremos la lista que nos pasen (puede ser la completa o la filtrada)
      for (let i = 0; i < listToDraw.length; i++) {
        drawPlayer(listToDraw[i]);
      }
    }
  
    // Dibujamos todos al principio (carga inicial)
    drawAllPlayers(players);
  
    // ==========================================
    // 5. CREACIÓN DINÁMICA DEL SELECT (Importantísimo para examen)
    // ==========================================
    
    // a) Sacamos un array SOLO con las posiciones strings
    let posArray = players.map((player) => player.position);
    
    // b) Usamos SET para eliminar duplicados automáticamente
    var posSet = new Set(posArray);
    
    // c) Convertimos el Set de vuelta a Array y ordenamos A-Z
    posArray = Array.from(posSet).sort();
  
    // d) Creamos el elemento <select> y la opción por defecto
    let posDropdown = document.createElement("select");
    posDropdown.id = "f_position";
    
    let blanckOpt = document.createElement("option");
    blanckOpt.textContent = "Select position";
    blanckOpt.value = "blank"; // Valor "chivato" para saber que no hay filtro
    blanckOpt.disabled = true;
    blanckOpt.selected = true;
    posDropdown.appendChild(blanckOpt);
  
    // e) Rellenamos el select con las posiciones únicas
    for (const pos of posArray) {
      let newOpt = document.createElement("option");
      newOpt.value = pos;
      newOpt.textContent = pos;
      posDropdown.appendChild(newOpt);
    }
  
    // f) Lo añadimos al header del HTML
    let header = document.getElementById("header");
    header.appendChild(posDropdown);
  
  
    // ==========================================
    // 6. CAPTURA DE LOS INPUTS DEL HTML
    // ==========================================
    // Necesitamos tenerlos en variables para leer qué ha escrito el usuario
    let pName = document.querySelector("#f_name");
    let pMinPPG = document.querySelector("#f_minPPG");
    let pMaxPPG = document.querySelector("#f_maxPPG");
  
  
    // ==========================================
    // 7. EL MOTOR DE FILTRADO (EL "EMBUDO")
    // ==========================================
    function applyAllFilters() {
      // PASO 0: Empezamos con una COPIA de todos los jugadores.
      // Si no filtramos nada, esta lista se quedará llena.
      let filteredPlayers = [...players];
  
      // PASO 1: Filtro de Posición
      // Si el valor NO es "blank", significa que el usuario eligió una posición.
      if (posDropdown.value != "blank") {
        // Sobrescribimos 'filteredPlayers' quedándonos solo con los que coinciden.
        filteredPlayers = filteredPlayers.filter(
          (player) => player.position == posDropdown.value
        );
      }
  
      // PASO 2: Filtro de Nombre (Búsqueda de texto)
      // Buscamos dentro de los que sobrevivieron al Paso 1.
      filteredPlayers = filteredPlayers.filter((player) => {
        let fullName = player.name + " " + player.surname;
        // Convertimos a minúsculas (.toLowerCase) ambos lados para comparar igual
        // .includes() devuelve true si lo que escribí está dentro del nombre
        return fullName.toLowerCase().includes(pName.value.toLowerCase());
      }); 
  
      // PASO 3: Filtro de Puntos Mínimos
      let minPPG = parseFloat(pMinPPG.value); // Convertimos texto a número decimal
      if (!isNaN(minPPG)) { // Si es un número válido...
        filteredPlayers = filteredPlayers.filter(
          (player) => player.pointsPerGame >= minPPG
        );
      }
  
      // PASO 4: Filtro de Puntos Máximos
      let maxPPG = parseFloat(pMaxPPG.value);
      if (!isNaN(maxPPG)) {
        filteredPlayers = filteredPlayers.filter(
          (player) => player.pointsPerGame <= maxPPG
        );
      };
  
      // PASO FINAL: Pintar el resultado
      cleanContainer(); // ¡Importante! Borrar lo viejo primero
      drawAllPlayers(filteredPlayers); // Pintar solo los filtrados
    }
  
    // ==========================================
    // 8. ASIGNAR LOS EVENTOS (LISTENERS)
    // ==========================================
    // Cada vez que el usuario toque algo, llamamos a 'applyAllFilters'
    
    posDropdown.addEventListener("change", applyAllFilters); // Para el desplegable
    pName.addEventListener("input", applyAllFilters);        // Al escribir nombre
    pMinPPG.addEventListener("input", applyAllFilters);      // Al escribir min puntos
    pMaxPPG.addEventListener("input", applyAllFilters);      // Al escribir max puntos
  
  
    // ==========================================
    // 9. BOTÓN DE RESETEAR FILTROS (CORREGIDO)
    // ==========================================
    let removefil = document.getElementById("removeFilters");
    
    removefil.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el enlace recargue la página o suba arriba
      
      // 1. LIMPIEZA VISUAL (Inputs):
      // Aquí estaba el fallo. Hay que vaciar las cajitas a mano.
      posDropdown.value = "blank"; // Volver el select al inicio
      pName.value = "";            // Vaciar nombre
      pMinPPG.value = "";          // Vaciar min
      pMaxPPG.value = "";          // Vaciar max
  
      // 2. LIMPIEZA DE DATOS (Volver a pintar todo):
      cleanContainer();
      drawAllPlayers(players); // Pasamos el array original completo
    });
  
  };