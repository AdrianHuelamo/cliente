document.addEventListener("DOMContentLoaded", () => {
    let li4 = document.createElement("li");
    li4.textContent = "4";
    
    let li3 = document.querySelector(".tres");
    li3.parentNode.insertBefore(li4, li3)
})