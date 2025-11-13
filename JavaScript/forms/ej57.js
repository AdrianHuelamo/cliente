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

        select.id = "country"
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
        let fInterestsList = [];
        let checkedInterests = document.querySelectorAll("input[name='interests']:checked");
        checkedInterests.forEach(function(checkbox) {
            fInterestsList.push(checkbox.value);
        });
        let fInterests = fInterestsList.join(', ');
        let genderChecked = document.querySelector("input[name='gender']:checked");
        let fGender = genderChecked ? genderChecked.value : "No seleccionado";
        let fCountry = document.getElementById("country").value;
        let fComments = document.getElementById("comments").value;

        formName.textContent = "Name: " + fName;
        formPass.textContent = "Password: " + fPass;
        formAge.textContent = "Age: " + fAge;
        formInterests.textContent = "Interests: " + fInterests;
        formGender.textContent = "Gender: " + fGender;
        formCountry.textContent = "Country: " + fCountry;
        formComments.textContent = "Comments: " + fComments;

        document.body.appendChild(formName);
        document.body.appendChild(formPass);
        document.body.appendChild(formAge);
        document.body.appendChild(formInterests);
        document.body.appendChild(formGender);
        document.body.appendChild(formCountry);
        document.body.appendChild(formComments);
    });
});