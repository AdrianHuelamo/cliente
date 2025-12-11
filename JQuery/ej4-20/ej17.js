$(document).ready(function() {
    $('#btnCreate').one('click', function() {
        
        var $newDiv = $('<div></div>');

        $newDiv.css({
            'width': '200px',
            'height': '100px',
            'border': '2px solid red',
            'background-color': '#f0f0f0', 
            'display': 'flex',            
            'align-items': 'center',      
            'justify-content': 'center'   
        });

        $newDiv.text('I am the new Div');

        $('#container').append($newDiv);
    });

});