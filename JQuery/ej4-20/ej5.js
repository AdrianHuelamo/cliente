document.addEventListener("DOMContentLoaded", () => {
    //1
    $("<li>Black Widow</li>").appendTo("ul");

    //2
    $("<li>Red Widow</li>").prependTo("ul");

    //3
    $("li:first").insertAfter("li:eq(3)");

    //4
    let tit = $("title").text();
    $("li:first").text(tit);

    //5
    $("<li>").insertAfter("li:eq(1)").text("Groot");

})