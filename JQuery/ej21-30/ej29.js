$(document).ready(function() {
    
    const imagenes = [
        "https://picsum.photos/id/10/500/300",
        "https://picsum.photos/id/20/500/300",
        "https://picsum.photos/id/30/500/300",
        "https://picsum.photos/id/40/500/300",
        "https://picsum.photos/id/50/500/300"
    ];
    let indice = 0;

    $("#carousel-wrapper").css({
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "gap": "10px",
        "margin-top": "50px"
    });

    $("#image-container").css({
        "width": "500px",
        "height": "300px",
        "border": "5px solid #2c3e50",
        "overflow": "hidden"
    });

    $(".img-carousel").css({ "width": "100%", "height": "100%" });

    $("#direct-access").css({
        "text-align": "center",
        "margin-top": "20px"
    });

    $(".index-btn").css({ "margin": "0 5px", "padding": "5px 10px", "cursor": "pointer" });

    function cambiarImagen(nuevoIndice) {
        $(".img-carousel").fadeOut(300, function() {
            indice = nuevoIndice;
            $(this).attr("src", imagenes[indice]).fadeIn(300);
            
            $(".index-btn").css("background-color", "");
            $(".index-btn:eq(" + indice + ")").css("background-color", "lightblue");
        });
    }
        $("#next").click(function() {
        let prox = (indice + 1) % imagenes.length;
        cambiarImagen(prox);
    });

    $("#prev").click(function() {
        let prev = (indice - 1 + imagenes.length) % imagenes.length;
        cambiarImagen(prev);
    });

    $(".index-btn").click(function() {
        let i = $(".index-btn").index(this);
        cambiarImagen(i);
    });

    $(".index-btn:eq(0)").css("background-color", "lightblue");
});