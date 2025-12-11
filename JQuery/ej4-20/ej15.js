$(document).ready(function() {
    var data = {
        'frontend': ['HTML', 'CSS', 'JavaScript', 'React'],
        'backend': ['Node.js', 'Python', 'PHP', 'Java']
    };

    $('#category').change(function() {
        var selection = $(this).val();
        
        var $container = $('#resultContainer');
        $container.empty();

        if (selection !== "") {
            var items = data[selection];
            var $newSelect = $('<select id="subCategory"></select>');

            $.each(items, function(index, value) {
                $newSelect.append(new Option(value, value));
            });

            $container.append('<label>Select a Technology: </label>');
            $container.append($newSelect);
        }
    });

});