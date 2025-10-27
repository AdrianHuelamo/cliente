window.onload = function() {
    let images = ["bob-esponja.jpg", "Coque_tonto.webp", "elfary.jpeg", "marquez.jpeg", "reyes.jpeg"];
    let img = document.querySelector("img");
    img.style.width = "300px";
    const num = Math.floor(Math.random() * 5);
    let path = "img/"+images[num];
    img.src=path;
}