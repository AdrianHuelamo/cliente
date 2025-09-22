let operation = prompt("Enter the operation: (addition, subtraction, multiplication, division)");
let number1 = parseInt(prompt("Enter number 1: "));
let number2 = parseInt(prompt("Enter number 2: "));

switch (operation) {
    case "addition":
        document.writeln(number1 + " + " + number2 + " = " + (number1+number2));
        break;
    
    case "subtraction":
        document.writeln(number1 + " - " + number2 + " = " + (number1-number2));
        break;

    case "multiplication":
        document.writeln(number1 + " x " + number2 + " = " + (number1*number2));
        break;

    case "division":
        document.writeln(number1 + " / " + number2 + " = " + (number1/number2));
        break;

    default:
        document.writeln("Error")
        break;
}