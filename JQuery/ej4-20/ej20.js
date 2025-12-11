$(document).ready(function() {

    // 1
    $('#name').blur(function() {
        var inputVal = $(this).val();
        if ($.trim(inputVal) === '') {
            $(this).focus(); 
        }
    });

    // 2
    $('#email').blur(function() {
        var inputVal = $(this).val();
        var $label = $(this).prev('label'); 

        if ($.trim(inputVal) === '') {
            $label.css({
                'color': 'red',
                'font-weight': 'bold'
            });
            if ($label.find('.error-text').length === 0) {
                $label.append('<span class="error-text"> (Error: Email is required)</span>');
            }
        }
    });

    // 3
    $('input[type="button"]').one('click', function() {
        alert("Button clicked!");
    });

});