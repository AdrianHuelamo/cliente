window.onload = function() {
    let name = "";
    let stop = true;
    let names = [];
    let cards = [];

    while (stop) {
        name = prompt("Enter a name: ");
        if (name.toLowerCase() == "stop") {
            stop = false;
        } else {
            names.push(name);
        }
    }

    let greeting = prompt("Enter the greeting: ");

    for (let i = 0; i < names.length; i++) {       
        let card = document.createElement("div");
        card.className = "name-tag";
        let h1 = document.createElement("h1");
        h1.textContent = greeting;
        let p = document.createElement("p");
        p.textContent = names[i];
        card.appendChild(h1);
        card.appendChild(p);
        cards.push(card);
    }

    cards.forEach(card => {
        document.body.appendChild(card);
    })
    
}