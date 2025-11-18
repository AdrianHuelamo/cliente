document.addEventListener("DOMContentLoaded", () => {
    const players = [
        { id: 1, image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png", name: "LeBron James", position: "SF", age: 38, pointsPerGame: 28.9 },
        { id: 2, image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png", name: "Stephen Curry", position: "PG", age: 35, pointsPerGame: 29.4 },
        { id: 3, image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png", name: "Giannis Antetokounmpo", position: "PF", age: 28, pointsPerGame: 31.1 },
        { id: 4, image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png", name: "Luka Doncic", position: "PG", age: 24, pointsPerGame: 32.4 },
        { id: 5, image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png", name: "Jayson Tatum", position: "SF", age: 25, pointsPerGame: 30.1 },
    ];

    let container = document.getElementById("playersContainer");
    let show = document.querySelector("#show");
    let form = document.getElementById("form");

    let fid = document.getElementById("idNumber");
    let fname = document.getElementById("Name");
    let fsurname = document.getElementById("Surname");
    let fposition = document.getElementById("position");
    let fbirth = document.getElementById("dateOfBirthday");
    let fppg = document.getElementById("PPG");

    let editingId = null;

    function createPlayerCard(player) {
        let card = document.createElement("div");
        card.className = "card";

        let myImg = document.createElement("img");
        myImg.src = player.image || "https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png";
        myImg.className = "card-image";
        myImg.onerror = function() { this.src = "https://via.placeholder.com/300x300?text=No+Image"; };

        let cardContent = document.createElement("div");
        cardContent.className = "card-content";

        let myName = document.createElement("h2");
        myName.textContent = player.name;
        myName.className = "card-name";

        let myPosition = document.createElement("p");
        myPosition.textContent = `Position: ${player.position}`;
        myPosition.className = "info-item";

        let myAge = document.createElement("p");
        myAge.textContent = `Age: ${player.age}`;
        myAge.className = "info-item";

        let myPoints = document.createElement("p");
        myPoints.textContent = `PPG: ${player.pointsPerGame}`;
        myPoints.className = "info-item";

        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "changeName";

        let remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.className = "remove";

        edit.addEventListener("click", function () {
            form.style.display = "grid";
            document.querySelector("legend").textContent = "Edit Player";
            document.querySelector('input[type="submit"]').value = "Save Player";
            fid.style.display = "none";
            document.querySelector('label[for="idNumber"]').style.display = "none";

            editingId = player.id;

            let names = player.name.split(" ");
            fname.value = names[0];
            fsurname.value = names.slice(1).join(" ");
            fposition.value = player.position;
            fppg.value = player.pointsPerGame;

            form.scrollIntoView({behavior: "smooth"});
        });

        remove.addEventListener("click", function () {
            let index = players.findIndex(p => p.id === player.id);
            if (index > -1) players.splice(index, 1);
            card.remove();
        });

        cardContent.appendChild(myName);
        cardContent.appendChild(myPosition);
        cardContent.appendChild(myAge);
        cardContent.appendChild(myPoints);
        cardContent.appendChild(edit);
        cardContent.appendChild(remove);

        card.appendChild(myImg);
        card.appendChild(cardContent);

        container.appendChild(card);
    }

    players.forEach(player => {
        createPlayerCard(player);
    });

    show.addEventListener("click", () => {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "grid";
            show.textContent = "Hide Form";
            editingId = null;
            form.reset();
            document.querySelector("legend").textContent = "Add Player";
            document.querySelector('input[type="submit"]').value = "Add Player";
            fid.style.display = "block";
            document.querySelector('label[for="idNumber"]').style.display = "block";
        } else {
            form.style.display = "none";
            show.textContent = "Show Form";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let vid = fid.value;
        let vname = fname.value;
        let vsurname = fsurname.value;
        let vposition = fposition.value;
        let vbirth = fbirth.value;
        let vppg = fppg.value;

        if (vname === "" || vsurname === "" || vppg === "") {
            alert("Please fill correctly all fields");
            return;
        }

        let ageCalculated = "N/A";
        if(vbirth) {
            let birthDate = new Date(vbirth);
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            ageCalculated = age;
        }

        if (editingId !== null) {
            let playerToUpdate = players.find(p => p.id === editingId);
            if (playerToUpdate) {
                playerToUpdate.name = `${vname} ${vsurname}`;
                playerToUpdate.position = vposition;
                playerToUpdate.pointsPerGame = vppg;
                if (ageCalculated !== "N/A") {
                    playerToUpdate.age = ageCalculated;
                }
            }
            container.innerHTML = "";
            players.forEach(p => createPlayerCard(p));
        } else {
            let newPlayer = {
                id: vid || Date.now(),
                image: "",
                name: `${vname} ${vsurname}`,
                position: vposition,
                age: ageCalculated,
                pointsPerGame: vppg
            };
            players.push(newPlayer);
            createPlayerCard(newPlayer);
        }

        form.reset();
        form.style.display = "none";
        show.textContent = "Show Form";
        editingId = null;
        fid.style.display = "block";
        document.querySelector('label[for="idNumber"]').style.display = "block";
        document.querySelector("legend").textContent = "Add Player";
        document.querySelector('input[type="submit"]').value = "Add Player";
    });
});