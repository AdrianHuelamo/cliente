let divideByTwo = x => x/2;

let divideTwoNumbers = (x,y) => {if (x>y) {return x/y} else {return y/x}};

let num = parseInt(prompt("Enter a number: "));
document.writeln(num + " / 2 = " + divideByTwo(num) + "<br>");

let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter other number: "));
let div = divideTwoNumbers(num1, num2);
document.writeln(num1 + " / " + num2 + " = " + div + "<br>")
document.writeln("The nearest integer is: " + Math.round(div));