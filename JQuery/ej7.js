document.addEventListener("DOMContentLoaded", () => {
    //1
    $("p").wrapAll("<div style='border:1px solid red'></div>");

    //2
    $("p").wrap("<div style='border:1px solid blue'></div>");

    //3
    $("li:first").text("Deadpool");

    //4
    let li = $("ul.avengers li:first").text();
    $("p:first").text(li);
})