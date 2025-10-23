window.onload = function() {
    //1
    let p = document.querySelector("p");
    let text = p.innerText;
    p.innerText=text + "This is my text";

    //2
    let img = document.querySelector("img");
    img.src="img/Coque_tonto.webp"

    //3
    let div = document.querySelectorAll("div");
    let lastdiv = div[div.length-1];
    lastdiv.style.border="5px solid red"
    
    //4
    let link = document.querySelector('a');
    if (link) {
        link.remove();
}
}