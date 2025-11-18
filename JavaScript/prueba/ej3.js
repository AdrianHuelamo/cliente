document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("form");
    let email = document.getElementById("email");
    let confEmail = document.getElementById("email2");
    let btn = document.querySelector("input[type='submit']");
    btn.style.display = "none";

    confEmail.addEventListener("input", () => {
        let existError = document.getElementById("error");
        if (existError) {
            existError.remove();
        }
        if (email.value !== confEmail.value){
            let mens = document.createElement("span");
            mens.textContent = "Emails do not match";
            mens.style.color = "red";
            mens.id = "error";
            btn.parentNode.insertBefore(mens, btn);
        } else {
            btn.style.display = "block";
        }
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault;
        if (email.value === confEmail.value) {
            alert("correct send");
            form.submit();
        }
    })
})