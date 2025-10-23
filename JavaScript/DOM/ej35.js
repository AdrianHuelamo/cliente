window.onload = function() {
    //1
    let links = document.getElementsByTagName("a");
    console.log("Number of links: " + links.length);

    //2
    let secondToLast = links[links.length - 2];
    console.log("The second-to-last link.: " + secondToLast.href);

    //3
    let numL = 0;
    let newarray = Array.from(links);
    for (let link of newarray) {
        if (link.href == "http://prueba/") {
            numL++;
        }
    }
    console.log("Number of links pointing to http://prueba: " + numL);
    
    //4
    let thirdParagraph = document.getElementsByTagName('p')[2];
    let linksInThird = thirdParagraph.getElementsByTagName('a');
    console.log("Number of links in the third paragraph: " + linksInThird.length);
}