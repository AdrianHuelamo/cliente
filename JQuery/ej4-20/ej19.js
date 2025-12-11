$(document).ready(function() {
    var cssStyles = `
        <style>
            .field {
                border: 1px solid black;
                margin: 5px 0;
                padding: 5px; /* Added a little padding for better visuals */
            }
        </style>
    `;
    $('head').append(cssStyles);
    $('label').each(function() {        
        $(this).next().addBack().wrapAll('<div class="field"></div>');
    });

});