window.onload = function() {
    let p = document.querySelector("p");

    function fgray() {
        p.style.backgroundColor = "gray";

    }

    function fgreen() {
        p.style.backgroundColor = "green";

    }

    function fred() {
        p.style.backgroundColor = "red";

    }

    function fblue() {
        p.style.backgroundColor = "blue";

    }

    p.addEventListener("mouseover", fgray);
    p.addEventListener("mouseout", fgreen);
    p.addEventListener("click", fred);
    p.addEventListener("dblclick", fblue);
}