$(document).ready(function() {
        const imagenes = [
        "https://picsum.photos/id/10/500/300",
        "https://picsum.photos/id/20/500/300",
        "https://picsum.photos/id/30/500/300",
        "https://picsum.photos/id/40/500/300"
    ];
    let indice = 0;

    $("#carousel-container").css({
        "width": "500px",
        "height": "300px",
        "overflow": "hidden", 
        "position": "relative",
        "margin-top": "20px",
        "border": "5px solid #333"
    });

    $(".img-carousel").css({
        "width": "100%",
        "height": "100%",
        "position": "relative",
        "cursor": "pointer"
    });

    $(".img-carousel").click(function() {
        const tipo = $("input[name='transition']:checked").val();
        const $img = $(this);

        indice = (indice + 1) % imagenes.length;
        const siguienteSrc = imagenes[indice];

        if (tipo === "hideshow") {
            $img.hide(400, function() {
                $img.attr("src", siguienteSrc).show(400);
            });

        } else if (tipo === "slide") {
            $img.slideUp(400, function() {
                $img.attr("src", siguienteSrc).slideDown(400);
            });

        } else if (tipo === "fade") {
            $img.fadeOut(400, function() {
                $img.attr("src", siguienteSrc).fadeIn(400);
            });

        } else if (tipo === "custom") {
            $img.animate({ left: "500px", opacity: 0 }, 400, function() {
                $img.attr("src", siguienteSrc).css({ left: "-500px", opacity: 0 });
                $img.animate({ left: "0px", opacity: 1 }, 400);
            });
        }
    });
});