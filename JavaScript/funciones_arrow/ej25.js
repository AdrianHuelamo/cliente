let compareGrades = x => x > newGrade;

let grades = [];
for (let i=0; i<5; i++) {
    let grade = parseInt(prompt("Enter a grade: "));
    grades.push(grade);
}

let newGrade = parseInt(prompt("Enter a new grade: "));

document.writeln(grades.some(compareGrades));