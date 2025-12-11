$(document).ready(function() {
    
    // 1
    console.log($('p[class]'));

    // 2
    console.log($('p:has(*)'));

    // 3
    console.log($('p.paragraph1'));

    // 4
    console.log($('p:contains("Luigi")'));

    // 5
    console.log($('p[class^="para"]'));

    // 6
    console.log($('p[class^="para"][align*="center"]'));

    // 7
    console.log($('ul:visible'));

    // 8
    console.log($(':only-child'));

    // 9
    console.log($('ul li:nth-child(2)'));

    // 10
    console.log($('ul:has(li.a)'));

    // 11
    console.log($('ul li:last-child'));

});