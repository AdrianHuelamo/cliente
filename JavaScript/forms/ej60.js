document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById('myInput');
    const warningDiv = document.getElementById('warning-msg');

    warningDiv.style.color = 'red';
    warningDiv.style.display = 'none';

    const forbidden = ['d', 'a', 'w'];

    inputField.addEventListener('keydown', function(event) {
        const key = event.key;
        if (forbidden.includes(key.toLocaleLowerCase())) {
            event.preventDefault(); 
            warningDiv.textContent = `The letter "${key}" is not allowed on this page`;   
            warningDiv.style.display = 'block';
            } else {
                warningDiv.style.display = 'none';
            }
        });
})