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
        let spanEmail = document.getElementById("errorEmail");
        let spanSolvamEmail = document.getElementById("errorSolvamEmail");
        if (spanEmail) {
            spanEmail.remove();
        } else if (spanSolvamEmail) {
            spanSolvamEmail.remove();
        }
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

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let hasEmailConf = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(confEmail.value);
        let hasSolvamConfEmail = /^[a-zA-Z0-9._%+-]+@solvam\.es$/.test(confEmail.value);
        let errorEmail = document.getElementById("errorEmail");
        let errorSolvamEmail = document.getElementById("errorSolvamEmail");
        if (errorEmail) {
            errorEmail.remove();
        } else if (errorSolvamEmail) {
            errorSolvamEmail.remove();
        }
        if (!hasEmailConf) {
            let spanEmail = document.createElement("span");
            spanEmail.textContent = "That's not an Email";
            spanEmail.style.color = "red";
            spanEmail.id = "errorEmail";
            submit.parentNode.insertBefore(spanEmail, submit);
        } else if (!hasSolvamConfEmail) {
            let spanSolvamEmail = document.createElement("span");
            spanSolvamEmail.textContent = "That's not a Solvam Email";
            spanSolvamEmail.style.color = "red";
            spanSolvamEmail.id = "errorSolvamEmail";
            submit.parentNode.insertBefore(spanSolvamEmail, submit);
        } else {
            let h1 = document.createElement("h1");
            form.remove();
            h1.textContent = "Email accepted"
            document.body.appendChild(h1);
        }

    })
})