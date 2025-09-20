let teachers = ["Jose", "Lola", "Lorenzo", "Mariluz", "Maria Jose"];
let tname = prompt("Enter teacher's name: ");

let found = teachers.some(teacher => teacher.toUpperCase() === tname.toUpperCase());

if (found) {
    console.log("Name found");
} else {
    console.log(tname + " is not a current teacher");
}
