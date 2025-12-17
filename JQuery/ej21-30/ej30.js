$(document).ready(function() {
    $("#grid-container").css({
        "display": "grid",
        "grid-template-columns": "repeat(3, 200px)",
        "gap": "15px",
        "justify-content": "center",
        "margin-top": "50px"
    });

    $(".img-box").css({
        "width": "200px",
        "height": "200px",
        "overflow": "hidden", 
        "position": "relative",
        "border": "2px solid #333",
        "background": "#000"
    });

    $(".img-box img").css({
        "width": "300px",   
        "height": "300px",
        "position": "absolute",
        "top": "-50px",      
        "left": "-50px",
        "opacity": "0.5"
    });

    $(".img-box img").hover(
        function() {
            $(this).stop().animate({
                width: "200px",
                height: "200px",
                top: "0px",
                left: "0px",
                opacity: 1
            }, 400);
        }, 
        function() {
            $(this).stop().animate({
                width: "300px",
                height: "300px",
                top: "-50px",
                left: "-50px",
                opacity: 0.5
            }, 400);
        }
    );

});