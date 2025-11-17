document.addEventListener("DOMContentLoaded", () => {
    let pass = document.getElementById("pass");
    let dif = document.getElementById("dif");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        let mypass = pass.value;
        let hasLetters = /[a-zA-Z]/.test(mypass);
        let hasNumbers = /\d/.test(mypass);
        let hasSymbols = /[^a-zA-Z0-9]/.test(mypass);
        if (mypass.length < 8) {
            alert("The pass is so small");
            dif.textContent = ""; 
            return;
        } else {
            if(hasLetters && hasNumbers && hasSymbols) {
                dif.style.color = "green";
                dif.textContent = "HIGH";
            } else if (hasLetters && hasNumbers && !hasSymbols){
                dif.style.color = "yellow";                
                dif.textContent = "MEDIUM"
            } else {
                dif.style.color = "red";
                dif.textContent = "LOW";
            }
        }
    })
});