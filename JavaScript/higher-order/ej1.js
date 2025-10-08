const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((accumulator, currVal) => {return accumulator + currVal});

document.writeln(sum);