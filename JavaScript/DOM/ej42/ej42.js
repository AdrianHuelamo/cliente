window.onload = function() {
    let cards = document.querySelectorAll(".name-tag");

    let greeting = prompt("Enter the greeting: ");

    for (let i = 0; i < cards.length; i++) {
        let cardname = prompt("Enter the name: ");
        let h1 = cards[i].querySelector("h1");
        let p = cards[i].querySelector("p");
        h1.textContent = greeting;
        p.textContent = cardname;
    }
}