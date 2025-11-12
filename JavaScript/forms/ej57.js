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
        let formName = document.createElement("p");
        let formPass = document.createElement("p");
        let formAge = document.createElement("p");
        let formInterests = document.createElement("p");
        let formGender = document.createElement("p");
        let formCountry = document.createElement("p");
        let formComments = document.createElement("p");

        let fName = document.getElementById("name").value;
        let fPass = document.getElementById("password").value;
        let fAge = document.getElementById("age").value;
        let fInterests = document.getElementById("interests").value;
        let fGender = document.getElementById("gender").value;
        let fCountry = document.getElementById("country").value;
        let fComments = document.getElementById("comments").value;

        formName.textContent = fName;
        formPass.textContent = fPass;
        formAge.textContent = fAge;
        formInterests.textContent = fInterests;
        formGender.textContent = fGender;
        formCountry.textContent = fCountry;
        formComments.textContent = fComments;

        document.appendChild(formName);
        document.appendChild(formPass);
        document.appendChild(formAge);
        document.appendChild(formInterests);
        document.appendChild(formGender);
        document.appendChild(formCountry);
        document.appendChild(formComments);
    });
});