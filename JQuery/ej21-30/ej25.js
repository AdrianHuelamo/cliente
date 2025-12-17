$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".scrollButton").fadeIn();
        } else {
            $(".scrollButton").fadeOut();
        }
    });

    $(".scrollButton").click(function(event) {
        event.preventDefault();
        
        $("html, body").animate({
            scrollTop: 0
        }, 800); 
    });

});