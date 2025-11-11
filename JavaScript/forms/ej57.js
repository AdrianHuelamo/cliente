document.addEventListener("DOMContentLoaded", () => {
    function createSelect (){
        let divdes = document.createElement("div");

        let label = document.createElement("label");
        label.textContent = "Country: ";

        divdes.appendChild(label);

        let select = document.createElement("select");

        let optionS = document.createElement("option");
        optionS.textContent = "Spain";
        optionS.value = "spain";
        select.appendChild(optionS);

        let optionsA = document.createElement("option");
        optionsA.textContent = "Andorra";
        optionsA.value = "andorra";
        select.appendChild(optionsA);

        let optionsI = document.createElement("option");
        optionsI.textContent = "Ireland";
        optionsI.value = "ireland";
        select.appendChild(optionsI);

        divdes.appendChild(select);

        let gender = document.getElementById("gender");
        gender.appendChild(divdes);
    }

    createSelect();

    let myBtn = document.querySelector("input[type='button']");
    myBtn.addEventListener("click", () => {
        
    });
});