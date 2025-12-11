$(document).ready(function() {
    $('#btnToggle').click(function() {
        var currentText = $(this).text();

        if (currentText === "Play Music") {
            $(this).text("Pause Music");
        } else {
            $(this).text("Play Music");
        }
    });

});