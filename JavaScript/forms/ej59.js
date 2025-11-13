document.addEventListener("DOMContentLoaded", () => {
    function createSelect (){
        if (document.getElementById("heroes-select")) {
            return;
        }

        let divheroes = document.createElement("div");
        divheroes.id = "heroes-select"; 

        let label = document.createElement("label");
        label.textContent = "Super herores: ";

        divheroes.appendChild(label);

        let select = document.createElement("select");

        let optionJL = document.createElement("option");
        optionJL.textContent = "Justice League";
        optionJL.value = "justice League";
        select.appendChild(optionJL);

        let optionsA = document.createElement("option");
        optionsA.textContent = "Avengers";
        optionsA.value = "Avengers";
        select.appendChild(optionsA);

        let optionsD = document.createElement("option");
        optionsD.textContent = "Defenders";
        optionsD.value = "Defenders";
        optionsD.selected = true;
        select.appendChild(optionsD);

        divheroes.appendChild(select);

        let checkcont = document.getElementById("check");
        checkcont.appendChild(divheroes);
    }

    let btn = document.querySelector("#button");
    btn.addEventListener("click", () => {
    let check = document.querySelectorAll("input[name='super']:checked").length;
    let totalsuper = document.querySelectorAll("input[name='super']").length;

    if (totalsuper > 0 && totalsuper === check) {
        createSelect();
    } else {
        alert("Check all");
    }
    });
});