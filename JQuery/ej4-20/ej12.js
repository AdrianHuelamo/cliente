$(document).ready(function () {
    //1
    console.log($("#firstName").val());
    
    //2
    $("#email").val("correo");
    console.log($("#email").val());

    //3
    $("#gender").val(["man", "hobbit", "saiyan"]);
    console.log($("#gender").val());
    
    //4
    var seleccionados = $("input[name='lenguajes']:checked").map(function() {
        return $(this).val();
    }).get();
    console.log(seleccionados);
});