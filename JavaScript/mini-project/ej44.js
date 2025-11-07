document.addEventListener("DOMContentLoaded", () => {
  const players = [
    {
      id: 1,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      name: "LeBron James",
      position: "SF",
      age: 38,
      pointsPerGame: 28.9,
    },
    {
      id: 2,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
      name: "Stephen Curry",
      position: "PG",
      age: 35,
      pointsPerGame: 29.4,
    },
    {
      id: 3,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
      name: "Giannis Antetokounmpo",
      position: "PF",
      age: 28,
      pointsPerGame: 31.1,
    },
    {
      id: 4,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
      name: "Luka Doncic",
      position: "PG",
      age: 24,
      pointsPerGame: 32.4,
    },
    {
      id: 5,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
      name: "Jayson Tatum",
      position: "SF",
      age: 25,
      pointsPerGame: 30.1,
    },
  ];

  let container = document.getElementById("playersContainer");

  players.forEach(player => {
    let card = document.createElement("div");
    card.className = "card";

    let myImg = document.createElement("img");
    myImg.src = player.image;
    myImg.className = "card-image";

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

    let myId = document.createElement("p");
    myId.textContent = player.id;
    myId.style.display = "none"

    let changeName = document.createElement("button");
    changeName.textContent = "Change Name"
    changeName.className = "changeName";

    cardContent.appendChild(myName);
    cardContent.appendChild(myPosition);
    cardContent.appendChild(myAge);
    cardContent.appendChild(myPoints);
    cardContent.appendChild(myId);
    cardContent.appendChild(changeName);


    card.appendChild(myImg);
    card.appendChild(cardContent);

    container.appendChild(card);
  });

  let cards = document.querySelectorAll(".card-content");
  cards.forEach((card) => {
    let myBtn = card.querySelector("button");
    let oldName = card.querySelector(".card-name");
    myBtn.addEventListener("click", function () {
      let newName = prompt("Enter a new name: ");
      oldName.textContent = newName;
      });
  });
});