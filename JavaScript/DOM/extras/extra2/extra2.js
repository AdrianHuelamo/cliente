window.onload = function () {
  const template = document.getElementById("tag-template");
  const body = document.body;

  const names = [];
  let name ="";

  while (true) {
    name = prompt("Enter a name: ");
    if (!name || name.toLowerCase() === "stop") {
        break; 
    }
    names.push(name);
  }

  const greeting = prompt("Enter the greeting: ");

  names.forEach(person => {
    const clone = template.content.cloneNode(true);

    clone.querySelector("h1").textContent = greeting;
    clone.querySelector("p").textContent = person;

    body.appendChild(clone);
  });
}