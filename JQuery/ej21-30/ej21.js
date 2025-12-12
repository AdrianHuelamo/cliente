$(document).ready(function() {
    //1
    $(".button:eq(0)").click(function(){
        $("img").fadeOut(2000);
        $("img").fadeIn(1000);
    });

    //2
    $(".button:eq(1)").click(function(){
        $("img").toggle(1000); 
    });

    //3
    $(".button:eq(2)").click(function(){
        $("img").slideUp(3000);
        $("img").slideDown(1500);
    });

    //4
    $(".button:eq(3)").click(function(){
        $("img").animate({
            width: '-=200px',
        }, "slow");
        $("img").animate({
            width: '+=200px',
        }, "slow");
    });

    //5
    $(".button:eq(4)").click(function(){
        $("img").animate({
            up: '-100px',
            rigth: '+100px',
        }, "fast");
    });
})