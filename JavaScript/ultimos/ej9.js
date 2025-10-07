let teachers = ["Jose", "Lola", "Lorenzo", "Mariluz", "Maria Jose"];
let tname = prompt("Enter teacher's name: ").trim();

let found = false;

for (let teacher of teachers) {
    if (teacher.toUpperCase() === tname.toUpperCase()) {
        console.log("Name found");
        found = true;
        break;
    }
}

if (!found) {
    console.log(tname + " is not a current teacher");
}
