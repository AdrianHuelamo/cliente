document.addEventListener("DOMContentLoaded", () => {
    console.log("Ejercicio 3");
    
    console.log(1);
    console.log($("p.attribute"));

    console.log(2);    
    console.log($("#todo-list"));

    console.log(3);    
    console.log($("p"));
    console.log($("li.b"));
    
    console.log(4);
    console.log($("*"));
    
    console.log(5);
    console.log($("#important.a"));
    
    console.log(6);
    console.log($("ul+p"));
    
    console.log(7);
    console.log($("ul *.b"));
    
    console.log(8);
    console.log($("ul+p"));
    
    console.log(9);
    console.log($("p.t1.t2"));
})