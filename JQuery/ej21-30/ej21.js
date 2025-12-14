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
            top: '-=100%',
            right: '+=100%',
        }, "fast");
    });

    //6
    $(".button:eq(5)").click(function(){
        $("img").animate({
            width: '+=100px',
        },2000, "linear");
    });

    //7
    $(".button:eq(6)").click(function(){
        $("img").animate({
            opacity: '0',
        },5000, "swing")  
    });

    //8
    $(".button:eq(7)").click(function(){
        $("img").animate({opacity: '0.5'},1000);
        $("img").slideUp();
    });

    //9
    $(".button:eq(8)").click(function(){
        $("img").css('position', 'relative');
        $("img").animate({width: '50%'}, "slow");
        $("img").animate({top: '+=200px'}, "slow");
        $("img").animate({left: '+=150px'}, "slow");
        $("img").animate({top: '-=200px'}, "slow");
        $("img").animate({left: '-=150px'}, "slow"); 
    });

    //10
    $(".button:eq(9)").click(function(){
        $("img").css('position', 'relative');
        $("img").animate({
            width: '200px',
            height: '200px',
        },2000, function(){
            $("img").css("border-radius", '50%');
            setTimeout(function() {
            $("img").css("border-radius", "0");
            }, 1000);
        });
        
    });

    //11
    $(".button:eq(10)").click(function(){
      $("img").stop(true, true).removeAttr('style');
    });
})