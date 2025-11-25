document.addEventListener("DOMContentLoaded", () => {
    let form = document.createElement("form");
    let labelEmail = document.createElement("label");
    let labelConfEmail = document.createElement("label");
    let email = document.createElement("input");
    let confEmail = document.createElement("input");
    let submit = document.createElement("input");

    email.id = "email";
    email.type = "text";
    email.placeholder = "jose@solvam.es";

    confEmail.type = "text";
    confEmail.id = "confEmail";
    confEmail.placeholder = "jose@solvam.es";

    labelEmail.for = "email";
    labelEmail.textContent = "Email: "

    labelConfEmail.for = "confEmail";
    labelConfEmail.textContent = "Confirm Email: ";

    submit.type = "submit"
    submit.value = "submit";
    submit.disabled = true;

    form.appendChild(labelEmail);
    form.appendChild(email);
    form.appendChild(labelConfEmail);
    form.appendChild(confEmail);
    form.appendChild(submit)

    document.body.appendChild(form);

    confEmail.addEventListener("input", () => {
        let error = document.getElementById("error");
        if (error) {
            error.remove();
        }
        if (email.value !== confEmail.value) {
            submit.disabled = true;
            let span = document.createElement("span");
            span.textContent = "Emails do not match";
            span.style.color = "red";
            span.id = "error"
            submit.parentNode.insertBefore(span, submit)
        } else {
            submit.disabled = false;
        }
    })
})