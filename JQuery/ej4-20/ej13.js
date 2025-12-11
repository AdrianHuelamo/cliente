$(document).ready(function() {

    // 1
    $('p').click(function() {
        $(this).addClass('active');
    });

    // 2
    $('#clearActive').click(function() {
        $('p').removeClass('active');
    });

    // 3
    $('#checkActive').click(function() {
        $('p').each(function() {
            if ($(this).hasClass('active')) {
                if ($(this).find('span').length === 0) {
                    $(this).append(' <span>Active</span>');
                }
            }
        });
    });

    // 4
    $('#toggleActive').click(function() {
        $('p').toggleClass('active');
    });

    // 5
    $('#addCSS').click(function() {
        $('p.active').css('background-color', 'lightblue');
    });
});