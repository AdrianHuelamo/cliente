$(document).ready(function() {
    const imagenes = [
        "https://picsum.photos/id/101/500/300",
        "https://picsum.photos/id/102/500/300",
        "https://picsum.photos/id/103/500/300",
        "https://picsum.photos/id/104/500/300",
        "https://picsum.photos/id/106/500/300"
    ];
    
    let indice = 0;
    const imgWidth = 500;
    const imgHeight = 300;

    $("#carousel-container").css({
        "width": imgWidth + "px",
        "height": imgHeight + "px",
        "margin": "50px auto",
        "overflow": "hidden"
    });

    $(".button:eq(0)").css({
        "width": imgWidth + "px",
        "height": imgHeight + "px",
        "cursor": "pointer",
        "display": "block"
    });

    $(".button:eq(0)").click(function() {
        const $this = $(this);

        $this.animate({
            width: "0px",
            height: "0px",
            marginLeft: (imgWidth / 2) + "px",
            marginTop: (imgHeight / 2) + "px",
            opacity: 0
        }, 600, function() {
            
            indice = (indice + 1) % imagenes.length; 
            $this.attr("src", imagenes[indice]);

            $this.animate({
                width: imgWidth + "px",
                height: imgHeight + "px",
                marginLeft: "0px",
                marginTop: "0px",
                opacity: 1
            }, 600);
        });
    });
});