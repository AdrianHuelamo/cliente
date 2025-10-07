let compareAges = x => x > newAge;

let ages = [];
for (let i=0; i<5; i++) {
    let age = parseInt(prompt("Enter an age: "));
    ages.push(age);
}

let newAge = parseInt(prompt("Enter a new age: "));

document.writeln(ages.filter(compareAges));