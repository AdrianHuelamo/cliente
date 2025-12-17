window.onload = function () {

    const players = [
        {
            id: 7,
            image: 'chris_jones.jpg',
            name: 'Chris',
            surname: 'Jones',
            position: 'Point Guard',
            dateOfBirth: '1993-04-10',
            pointsPerGame: 12.5,
        },
        {
            id: 16,
            image: 'stefan_jovic.jpg',
            name: 'Stefan',
            surname: 'Jovic',
            position: 'Point Guard',
            dateOfBirth: '1990-11-03',
            pointsPerGame: 8.3,
        },
        {
            id: 5,
            image: 'sergio_de_larrea.jpg',
            name: 'Sergio',
            surname: 'De Larrea',
            position: 'Point Guard',
            dateOfBirth: '2004-02-18',
            pointsPerGame: 4.0,
        },
        {
            id: 8,
            image: 'jean_montero.jpg',
            name: 'Jean',
            surname: 'Montero',
            position: 'Shooting Guard',
            dateOfBirth: '2003-07-05',
            pointsPerGame: 11.5,
        },
        {
            id: 0,
            image: 'brancou_badio.jpg',
            name: 'Brancou',
            surname: 'Badio',
            position: 'Shooting Guard',
            dateOfBirth: '1999-02-17',
            pointsPerGame: 9.1,
        },
        {
            id: 6,
            image: 'xabier_lopez_arostegui.jpg',
            name: 'Xabier',
            surname: 'López-Arostegui',
            position: 'Shooting Guard',
            dateOfBirth: '1997-05-19',
            pointsPerGame: 7.8,
        },
        {
            id: 37,
            image: 'semi_ojeleye.jpg',
            name: 'Semi',
            surname: 'Ojeleye',
            position: 'Small Forward',
            dateOfBirth: '1994-12-05',
            pointsPerGame: 10.8,
        },
        {
            id: 2,
            image: 'josep_puerto.jpg',
            name: 'Josep',
            surname: 'Puerto',
            position: 'Small Forward',
            dateOfBirth: '1999-03-04',
            pointsPerGame: 5.5,
        },
        {
            id: 77,
            image: 'nate_sestina.jpg',
            name: 'Nate',
            surname: 'Sestina',
            position: 'Power Forward',
            dateOfBirth: '1997-05-12',
            pointsPerGame: 6.3,
        },
        {
            id: 4,
            image: 'jaime_pradilla.jpg',
            name: 'Jaime',
            surname: 'Pradilla',
            position: 'Power Forward',
            dateOfBirth: '2001-01-03',
            pointsPerGame: 8.9,
        },
        {
            id: 3,
            image: 'nathan_reuvers.jpg',
            name: 'Nathan',
            surname: 'Reuvers',
            position: 'Power Forward',
            dateOfBirth: '1998-09-22',
            pointsPerGame: 7.2,
        },
        {
            id: 24,
            image: 'matt_costello.jpg',
            name: 'Matt',
            surname: 'Costello',
            position: 'Center/Forward',
            dateOfBirth: '1993-08-05',
            pointsPerGame: 12.3,
        },
        {
            id: 22,
            image: 'ethan_happ.jpg',
            name: 'Ethan',
            surname: 'Happ',
            position: 'Center',
            dateOfBirth: '1996-05-07',
            pointsPerGame: 10.2,
        },
    ];

    let body = document.querySelector("body");
    let container = document.createElement("div");
    container.className = "container";

    let filterPlayers = [...players];
    localStorage.setItem("players", JSON.stringify(filterPlayers));
    let persistent = JSON.parse(localStorage.getItem("players"));

    function drawAllPlayers(persistent) {
        persistent.forEach(p => {
            drawPlayer(p)
        });

    }

    function drawPlayer(player) {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="imgs/${player.image}">
            <p class=>${player.name} ${player.surname}</h1>
            <p>${player.position}</p>
            <p>${player.dateOfBirth}</p>
            <p>${player.pointsPerGame}</p>
        `;

        container.appendChild(card);
        body.appendChild(container);
    }
    drawAllPlayers(persistent);

    let arraypos = persistent.map(p => p.position);
    let possSet = new Set(arraypos);
    let posslistdefi = Array.from(possSet).sort();

    let select = document.querySelector("select");
    let optionfeo = document.createElement("option");
    optionfeo.textContent = "-";
    optionfeo.disabled = true;
    optionfeo.selected = true;

    select.appendChild(optionfeo);

    posslistdefi.forEach((position) => {
        let option = document.createElement("option");
        option.textContent = position;
        option.value = position;
        select.appendChild(option);
    });

    select.addEventListener("change", (e) => {
        const seleccion = e.target.value;

        const jugadoresFiltrados = persistent.filter(p => p.position === seleccion);

        container.innerHTML = "";

        drawAllPlayers(jugadoresFiltrados);
    });

    let pName = document.querySelector("#f_name");
    pName.addEventListener("input", function () {
        let playerfilt = persistent.filter(p => {
            let fullName = p.name + " " + p.surname;
            return fullName.toLowerCase().includes(pName.value.toLowerCase());      
        });
    cleanContainer();
    drawAllPlayers(playerfilt);
    });

    let pMin = document.querySelector("#f_minPPG");
    pMin.addEventListener("input", function () {
        pointMin = parseFloat(pMin.value);
        let playerfilt = persistent.filter(p =>
            p.pointsPerGame >= pointMin);
    cleanContainer();
    drawAllPlayers(playerfilt);
    });

    let removefilters = document.querySelector("#removeFilters");
    removefilters.addEventListener("click", function (e) {
        e.preventDefault();
        cleanContainer();
        pName.value = "";
        pMin.value = "";
        drawAllPlayers(persistent);
        select.firstElementChild.selected = true; 
    });

    function cleanContainer() {
        container.innerHTML = "";
    }

};
