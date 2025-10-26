window.onload = function() {
    //1
    let container = document.getElementById("container");
    let p = document.createElement("p");
    p.textContent = "Hello";
    container.appendChild(p);

    //2
    let container2 = document.querySelector("#container");
    let p2 = document.createElement("p");
    p2.textContent = "World";
    container2.appendChild(p2);

    //3
    let second = document.querySelectorAll(".second");
    second.forEach(second => {
        second.style.fontWeight = "bold";
    })
    
    //4
    let olthird = document.querySelector("ol .third");
    olthird.style.fontStyle = "italic";

    //5
    let footer = document.querySelector(".footer");
    footer.classList.add("main");

    //6
    footer.classList.remove("footer");

    //7
    let newLi = document.createElement("li");
    newLi.textContent = "four";

    //8
    let ul = document.querySelector("ul");
    ul.appendChild(newLi);

    //9
    let olli = document.querySelectorAll("ol li");
    olli.forEach(olli => {
        olli.style.backgroundColor = "green";
    })

    //10
    footer.remove()

}