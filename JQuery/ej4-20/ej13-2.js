$(document).ready(function() {
    var $caja = $('#cajaMagica');

    // 1
    $caja.on('mouseenter', function() {
        $(this).css({
            'background-color': 'orange',
            'cursor': 'pointer',
            'color': 'white'
        });
    });

    $caja.on('mouseleave', function() {
        $(this).css({
            'background-color': 'lightgray',
            'color': 'black'
        });
    });

    // 2
    $caja.click(function() {
        $(this).off('mouseenter mouseleave');
        $(this).html('<strong>¡Clickeado!</strong><br>Ya no cambio de color.');
    });

});