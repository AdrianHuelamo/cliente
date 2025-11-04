document.addEventListener("DOMContentLoaded", () => {
    let myH1 = document.createElement("h1");
    myH1.textContent = "Wellcome";
    document.body.prepend(myH1);

    let myImg = document.querySelector("img");
    myImg.addEventListener('mouseover', () => {
        myImg.src = "img/Coque_tonto.webp"
    });
    myImg.addEventListener("mouseout", () => {
        myImg.src = "img/elfary.jpeg"
    });
    myImg.addEventListener("click", () => {
        alert("Stop clicking me!!")
    });
});