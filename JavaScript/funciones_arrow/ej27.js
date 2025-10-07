let capital = x => (x.split(" ")(y => y.charAt(0).toUpperCase() + y.slice(1)).join(" "));

let names = [];
for (let i=0; i<3; i++) {
    let name = prompt("Enter a full name: ");
    names.push(name);
}

document.writeln(names.map(capital));