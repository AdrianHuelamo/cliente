document.addEventListener("DOMContentLoaded", () => {
    let pass = document.getElementById("pass");
    let dif = document.getElementById("dif");

    pass.addEventListener("input", () => {
        let mypass = pass.value;
        let hasLetters = /[a-zA-Z]/.test(mypass);
        let hasNumbers = /\d/.test(mypass);
        let hasSymbols = /[^a-zA-Z0-9]/.test(mypass);
        if(hasLetters && hasNumbers && hasSymbols && mypass.length >= 8) {
        dif.style.color = "green";
        dif.textContent = "HIGH";
        } else if (hasLetters && hasNumbers && !hasSymbols && mypass.length >= 8){
            dif.style.color = "yellow";                
            dif.textContent = "MEDIUM"
        } else {
            dif.style.color = "red";
            dif.textContent = "LOW";
        }
    });
});