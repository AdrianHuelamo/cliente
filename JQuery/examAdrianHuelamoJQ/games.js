document.addEventListener("DOMContentLoaded", () => {
    // data.js
// Array of video game objects for the exam

const games = [
    {
        id: 10234,
        title: "The Legend of Zelda: Breath of the Wild",
        genre: "Adventure",
        platform: "Nintendo Switch",
        year: 2017,
        rating: 10,
        image: "TLOZ_BOTW.jpg"
    },
    {
        id: 20856,
        title: "God of War",
        genre: "Action",
        platform: "PlayStation",
        year: 2018,
        rating: 9,
        image: "God_of_War_4_cover.jpg"
    },
    {
        id: 31729,
        title: "Minecraft",
        genre: "Sandbox",
        platform: "PC",
        year: 2011,
        rating: 9,
        image: "Minecraft_Cover_Art.png"
    },
    {
        id: 40987,
        title: "Animal Crossing: New Horizons",
        genre: "Simulation",
        platform: "Nintendo Switch",
        year: 2020,
        rating: 8,
        image: "animal_crossing.jpg"
    },
    {
        id: 52103,
        title: "Hollow Knight",
        genre: "Metroidvania",
        platform: "PC",
        year: 2017,
        rating: 9,
        image: "Hollow_Knight_cover_art.png"
    },
    {
        id: 63218,
        title: "Red Dead Redemption 2",
        genre: "Action",
        platform: "PlayStation",
        year: 2018,
        rating: 10,
        image: "Red_Dead_Redemption_II.jpg"
    },
    {
        id: 74562,
        title: "Stardew Valley",
        genre: "Simulation",
        platform: "PC",
        year: 2016,
        rating: 9,
        image: "Stardew_Valley_Cover_Art.png"
    },
    {
        id: 85673,
        title: "Overwatch 2",
        genre: "Shooter",
        platform: "PC",
        year: 2022,
        rating: 7,
        image: "overwatch-2.jpg"
    },
    {
        id: 96784,
        title: "Super Mario Odyssey",
        genre: "Platformer",
        platform: "Nintendo Switch",
        year: 2017,
        rating: 9,
        image: "Super_Mario_Odyssey.jpg"
    },
    {
        id: 10895,
        title: "League of Legends",
        genre: "MOBA",
        platform: "PC",
        year: 2009,
        rating: 8,
        image: "League_of_Legends_logo.jpg"
    }
];

    let container = document.querySelector("#cardsContainer");

    function clean(){
        container.innerHTML = "";
    }

    function drawAllGames(games) {
        games.forEach(g => {            
            drawGame(g);
        });
    }

    function drawGame(game) {
        let card = document.createElement("div");
        card.className = "game-card game-card-content"
        
        let imgCard = document.createElement("img");
        let titleCard = document.createElement("h3");
        let genereCard = document.createElement("p");
        let platformCard = document.createElement("p");
        let yearCard = document.createElement("p");
        let ratingCard = document.createElement("p");

        imgCard.src = "img/"+ game.image;
        titleCard.textContent = game.title;
        genereCard.textContent = game.genre;
        platformCard.textContent = game.platform;
        yearCard.textContent = game.year;
        ratingCard.textContent = game.rating;

        card.appendChild(imgCard)
        card.appendChild(titleCard);
        card.appendChild(genereCard);
        card.appendChild(platformCard);
        card.appendChild(yearCard);
        card.appendChild(ratingCard);

        container.appendChild(card);
    };

    drawAllGames(games);
    
    function applyfilters () {
        let filterList = [];
        //if (name) {
        //    if((games.title).includes(name)){
        //        filterList.push(name)
        //    }
        //}
        //if (!isNaN(rate)) {
        //    if(rate >= games){
        //        filterList.push(rate);
        //    }
        //}
        //clean();
        //drawAllGames(filterList);
    }

    let name = document.getElementById("searchInput");
    let genere = document.getElementById("genreSelect");
    let plataform = document.getElementById("platformSelect");
    let rate = document.getElementById("minRatingInput");

    name.addEventListener("input", applyfilters());
    genere.addEventListener("change", applyfilters());
    plataform.addEventListener("change", applyfilters());
    rate.addEventListener("input", applyfilters());
})