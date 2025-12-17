$(document).ready(function() {
    const btn = $(".button:eq(0)");

    btn.css('position', 'relative');

    btn.mouseenter(function() {
        $(this).stop(true, true); 

        for (let i = 0; i < 5; i++) {
            $(this)
                .animate({ left: "-10px" }, 50)
                .animate({ left: "10px" }, 50)
                .animate({ left: "0px" }, 50);
        }
    });

    btn.click(function() {
        for (let i = 0; i < 3; i++) {
            $(this)
                .animate({ top: "-20px" }, 150)
                .animate({ top: "0px" }, 150);
        }
    });

});