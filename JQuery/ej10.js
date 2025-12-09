document.addEventListener("DOMContentLoaded", () => {
    function replaceParagraphsWithH1() {
        $('p[class]').replaceWith(function() {
        return '<h1>' + $(this).html() + '</h1>';
        });
    };
})