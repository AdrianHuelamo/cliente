$(document).ready(function() {
    $(".nav-bar").css({
        "position": "fixed",
        "top": "50px",
        "left": "-120px",      
        "width": "150px",      
        "background-color": "#333",
        "padding": "20px",
        "display": "flex",
        "flex-direction": "column",
        "border-radius": "0 10px 10px 0"
    });

    $(".nav-bar a").css({
        "color": "white",
        "text-decoration": "none",
        "margin": "10px 0",
        "font-family": "Arial, sans-serif"
    });

    $(".nav-bar").mouseenter(function() {
        $(this).stop().animate({
            left: "0px"
        }, 500);
    });

    $(".nav-bar").mouseleave(function() {
        $(this).stop().animate({
            left: "-120px"
        }, 500);
    });

});