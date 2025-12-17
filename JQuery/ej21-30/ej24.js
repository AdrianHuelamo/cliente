$(document).ready(function() {
    $(".nav-right").css({
        "position": "fixed",
        "right": "0",
        "top": "100px",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "flex-end"
    });

    $(".button").css({
        "display": "block",
        "width": "100px", 
        "background-color": "#2c3e50",
        "color": "white",
        "padding": "15px",
        "margin-bottom": "5px",
        "text-decoration": "none",
        "text-align": "center",
        "font-family": "Arial"
    });

    $(".button").hover(
        function() {
            $(this).stop().animate({
                width: "200px"
            }, 300);
        }, 
        function() {
            $(this).stop().animate({
                width: "100px"
            }, 300);
        }
    );

});