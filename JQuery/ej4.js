document.addEventListener("DOMContentLoaded", () => {
    //1
    //console.log($("li").replaceWith("<li>Batman rules</li>"));
    $("li").text("Batman rules");

    //2
    $("a").attr("href", "https://es.wikipedia.org/wiki/Batman");
    
    //3
    $("img").attr("alt");

    //4
    $("img").attr({src: "joselu.jpg", alt: "joseluSionista", width: "500px"});

    //5
    $("img").removeAttr("alt");
})