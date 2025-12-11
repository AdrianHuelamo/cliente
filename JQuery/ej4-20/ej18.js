$(document).ready(function() {
    $('input[type="button"]').click(function() {
        $('input[placeholder]').each(function() {          
        var placeholderText = $(this).attr('placeholder');
        $(this).val(placeholderText);           
        });
    });

});