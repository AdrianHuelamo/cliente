document.addEventListener("DOMContentLoaded", () => {
    //1
    $("li:first").clone().appendTo(".avengers");

    //2
    $("p:first").css({
        "border": "3px solid black",
        "background-color":"red"
    });

    //3
    $("li:first").remove();

    //4
    $(".avengers li").remove();
    $("<li>").text("Deadpool").appendTo(".avengers");
    $("<li>").text("Batman").appendTo(".avengers");
    $("<li>").text("Wolverine").appendTo(".avengers");

    //5
    for (let i = 0; i<11; i++) {
        //let p = $("<p>").text(i);
        //$("p").append(p);
        $("body").append("<p>" + i + "</p>")
    }
})