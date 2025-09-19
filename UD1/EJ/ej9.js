let teachers = ["Jose", "Lola", "Lorenzo", "Mariluz", "Maria Jose"];
let tname = prompt("Enter teacher's name: ");

let teacher = ""

for (let teacher =""; teacher.toUpperCase() = tname.toUpperCase();){
    teacher = teachers.shift();
    if (teacher.toUpperCase() = tname.toUpperCase()){
        console.log("Name found");
    } else{
        console.log(teacher + " is not a current teacher");
    }
}