document.addEventListener("DOMContentLoaded", () => {
  const players = [
    {
      id: 24,
      image: "matt_costello.jpg",
      name: "Matt Costello",
      position: "Center/Forward",
      age: 31,
      pointsPerGame: 12.3,
    },
    {
      id: 0,
      image: "brancou_badio.jpg",
      name: "Brancou Badio",
      position: "Guard",
      age: 25,
      pointsPerGame: 9.1,
    },
    {
      id: 5,
      image: "sergio_de_larrea.jpg",
      name: "Sergio de Larrea",
      position: "Guard",
      age: 19,
      pointsPerGame: 10.8,
    },
    {
      id: 8,
      image: "jean_montero.jpg",
      name: "Jean Montero",
      position: "Guard",
      age: 21,
      pointsPerGame: 11.5,
    },
    {
      id: 4,
      image: "jaime_pradilla.jpg",
      name: "Jaime Pradilla",
      position: "Forward/Center",
      age: 23,
      pointsPerGame: 8.9,
    },
  ];

  let body = document.querySelector("body");

  let container = document.createElement("div");
  container.className = "container";

  body.appendChild(container);

  function cleanContainer() {
    container.innerHTML = "";
  }

  function deletePlayer(players, id) {
    let playerIndex = players.findIndex((player) => player.id == id);
    players.splice(playerIndex, 1);
  }

  function drawPlayer(player) {
    let myCard = document.querySelector("template").content.cloneNode(true);
    let card = myCard.querySelector("div");
    card.id = player.id;
    let img = myCard.querySelector("img");
    img.src = "ejer40imgs/" + player.image;
    let name = myCard.querySelector("h2");
    name.innerText = player.name;
    let p = myCard.querySelectorAll("p");
    let p1 = p[0];
    let p2 = p[1];
    let p3 = p[2];
    p1.innerText += player.position;
    p2.innerText += player.age + " years";
    p3.innerText += player.pointsPerGame + " points per game";
    let rmBtn = myCard.querySelector(".but");
    let edBtn = myCard.querySelector(".edt");

    container.appendChild(myCard);
    rmBtn.addEventListener("click", () => {
      let playerID = rmBtn.parentElement.id;
      deletePlayer(players, playerID);
      cleanContainer();
      drawAllPlayers(players);
    });

    edBtn.addEventListener("click", () => {
      let playerID = edBtn.parentElement.id;
      let player = players.find((player) => player.id == playerID);
      document.getElementsByName("pname")[0].value = player.name;
      player.name = "Jose Socuellamos"


      console.log(player);
      
      cleanContainer();
      drawAllPlayers(players);
    });
  }

  function drawAllPlayers(players) {
    for (const player of players) {
      drawPlayer(player);
    }
  }

  drawAllPlayers(players);

  // let myPlayerName = prompt(
  //   "Enter the jersey number of the player you want to rename: "
  // );
  // let newName = prompt("Enter the new name of the player: ");
  // let playerIndex = players.findIndex((player) => player.name == myPlayerName);
  // players[playerIndex].name = newName;
  // cleanContainer();
  // drawAllPlayers(players);

  let addPlayerBtn = document.querySelector("#showForm");

  let formDiv = document.querySelector("#newPlayerForm");

  addPlayerBtn.addEventListener("click", function () {
    if (addPlayerBtn.textContent == "Show Form") {
      formDiv.style.display = "block";
      addPlayerBtn.textContent = "Hide Form";
    } else {
      formDiv.style.display = "none";
      addPlayerBtn.textContent = "Show Form";
    }

    let submitBtn = document.querySelector("#submitForm");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let idInput = document.getElementsByName("pid")[0].value;
      let nameInput = document.getElementsByName("pname")[0].value;
      let surnameInput = document.getElementsByName("psurname")[0].value;
      let posInput = document.getElementsByName("position")[0].value;
      let ageInput = document.getElementsByName("age")[0].value;
      let ppgInput = document.getElementsByName("ppg")[0].value;

      console.log(idInput);

      let newPlayer = {
        id: idInput,
        image: "default.jpg",
        name: nameInput + " " + surnameInput,
        position: posInput,
        age: ageInput,
        pointsPerGame: ppgInput,
      };

      players.push(newPlayer);
      document.querySelector("form").reset();
      formDiv.style.display = "none";
      addPlayerBtn.innerText = "Show Form";
      cleanContainer();
      drawAllPlayers(players);
    });
  });
});
