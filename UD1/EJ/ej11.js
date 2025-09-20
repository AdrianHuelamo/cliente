let numbers = [];
let sum = 0;

let number = parseInt(prompt("Enter a number: "));

while (number !== -1) {
    if (isNaN(number) || number < 0) {
        alert("Please enter a valid positive number or -1 to finish.");
    } else {
        numbers.push(number);
    }
    number = parseInt(prompt("Enter a number: "));
}

for (let n of numbers) {
    sum += n;
}

alert("The sum of the numbers is: " + sum);
