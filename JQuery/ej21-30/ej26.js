$(document).ready(function() {
    $(".box:eq(0)").css({
        "width": "100px",
        "height": "100px",
        "border": "3px solid #2980b9",
        "background-color": "#3498db",
        "color": "white",
        "text-align": "center",
        "line-height": "100px",
        "margin": "10px",
        "position": "relative"
    });

    $(".box:eq(1)").css({
        "width": "100px",
        "height": "100px",
        "border": "3px solid #c0392b",
        "background-color": "#e74c3c",
        "color": "white",
        "text-align": "center",
        "line-height": "100px",
        "margin": "10px",
        "position": "relative" 
    });

    $(".button").click(function() {
        $(".box").css("left", "0px");

        $(".box:eq(0)").animate({
            left: "80%"
        }, 3000, "linear");

        $(".box:eq(1)").animate({
            left: "80%"
        }, 3000, "swing");
    });

});