document.addEventListener("DOMContentLoaded", () => {
    let myform = document.getElementById("register")
    let myname = document.getElementById("register_name");
    let myemail = document.getElementById("register_email");
    let mypass = document.getElementById("register_password");
    let mycomments = document.getElementById("register_comments");
    let mycheck = document.getElementById("register_terms");

    myname.addEventListener("blur", () => {
        let contName = myname.value.trim();
        let errorId = "error_name_span";
        let errorMsg = document.getElementById(errorId);
        if (contName === "") {
            myname.style.backgroundColor = "#F8D7DA";
            if (!errorMsg) {
            let mens = document.createElement("span");
            mens.id = errorId;
            mens.style.color = "red";
            mens.style.display = "block";
            mens.style.marginLeft = "200px";

            mens.textContent = "The name is empty";
            myname.parentNode.insertBefore(mens, myname.nextSibling);
            }
        } else {
            myname.style.backgroundColor = ""; 
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    });

    myemail.addEventListener("blur", () => {
        let contEmail = myemail.value.trim();
        let errorId = "error_email_span";
        let errorMsg = document.getElementById(errorId);
        let hasemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contEmail);
        
        let errorMessage = "";

        if (contEmail === "") {
            errorMessage = "The email is empty";
        } else if (!hasemail) {
            errorMessage = "The email is not valid";
        }

        if (errorMessage !== "") {
            myemail.style.backgroundColor = "#F8D7DA";
            
            if (!errorMsg) {
                let mens = document.createElement("span");
                mens.id = errorId;
                mens.style.color = "red";
                mens.style.display = "block";
                mens.style.marginLeft = "200px";
                mens.textContent = errorMessage;
                myemail.parentNode.insertBefore(mens, myemail.nextSibling);
            } else {
                errorMsg.textContent = errorMessage;
            }

        } else {
            myemail.style.backgroundColor = "";
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    });

    mypass.addEventListener("blur", () => {
        let contPass = mypass.value;
        let errorId = "error_pass_span";
        let errorMsg = document.getElementById(errorId);
        let hasLowercase = /[a-z]/.test(contPass);
        let hasUppercase = /[A-Z]/.test(contPass);
        let hasDigit = /\d/.test(contPass);
        
        let errorMessage = "";

        if (contPass.length < 6) {
            errorMessage = "Password must be at least 6 characters.";
        } else if (!hasLowercase) {
            errorMessage = "The pass needs a lowercase letter.";
        } else if (!hasUppercase) {
            errorMessage = "The pass needs an uppercase letter.";
        } else if (!hasDigit) {
            errorMessage = "The pass needs a digit.";
        }

        if (errorMessage !== "") {
            mypass.style.backgroundColor = "#F8D7DA";
            
            if (!errorMsg) {
                let mens = document.createElement("span");
                mens.id = errorId;
                mens.style.color = "red";
                mens.style.display = "block";
                mens.style.marginLeft = "200px";
                mens.textContent = errorMessage;
                mypass.parentNode.insertBefore(mens, mypass.nextSibling);
            } else {
                errorMsg.textContent = errorMessage;
            }

        } else {
            mypass.style.backgroundColor = "";
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    });

    mycomments.addEventListener("blur", () => {
        let contComments = mycomments.value.trim();
        let errorId = "error_comments_span";
        let errorMsg = document.getElementById(errorId);
        
        let errorMessage = "";

        if (contComments === "") {
            errorMessage = "The comments is empty";
        } else if (contComments.length > 50) {
            errorMessage = "The comments is so long";
        }

        if (errorMessage !== "") {
            mycomments.style.backgroundColor = "#F8D7DA";
            
            if (!errorMsg) {
                let mens = document.createElement("span");
                mens.id = errorId;
                mens.style.color = "red";
                mens.style.display = "block";
                mens.style.marginLeft = "200px";
                mens.textContent = errorMessage;
                mycomments.parentNode.insertBefore(mens, mycomments.nextSibling);
            } else {
                errorMsg.textContent = errorMessage;
            }

        } else {
            mycomments.style.backgroundColor = "";
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    });
    
    myform.addEventListener("submit", (e) => {
        e.preventDefault();
        let contName = myname.value.trim();
        let contEmail = myemail.value.trim();
        let contPass = mypass.value;
        let contComments = mycomments.value.trim();

        let hasemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contEmail);
        let hasLowercase = /[a-z]/.test(contPass);
        let hasUppercase = /[A-Z]/.test(contPass);
        let hasDigit = /\d/.test(contPass);

        if (contName === "" || contComments === "" || contEmail === "" || contComments.length > 50 || !hasemail || contPass.length < 6 || !hasLowercase || !hasUppercase || !hasDigit || !mycheck.checked) {
            alert("Invalid field");
            return;
        } else {
            alert("Form send perfect");
            myform.submit();
        }
    })
})