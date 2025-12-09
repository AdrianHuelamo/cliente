document.addEventListener("DOMContentLoaded", () => {
    var texto1 = $("#description").text();
    var texto2 = $("#adv").text();

    var textoCompleto = texto1 + " " + texto2;

    $("#box").after("<p>" + textoCompleto + "</p>");
})