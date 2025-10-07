// Ejercicio 14
let even = x => x % 2 == 0;

let myarray1 = [1,2,3,4,5];
let evenarray = myarray1.filter(even);
document.writeln("Ejercicio 14<br>");
document.writeln(evenarray + "<br><br>");


// Ejercicio 15
let odd = x => x % 2 !== 0;

let myarray2 = [1,2,3,4,5];
let oddarray = myarray2.filter(odd);
document.writeln("Ejercicio 15<br>");
document.writeln(oddarray + "<br><br>");


// Ejercicio 16
let leap = x => {if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {return "TRUE";} else {return "FALSE"}}

let year = 2024;
let years = [year]
let yearleap = years.some(leap);
document.writeln("Ejercicio 16<br>");
document.writeln(yearleap + "<br><br>")



// Ejercicio 17
let palindrome = x => {return x.split("").reverse().join("")== x;}

let word = "alla";
document.writeln("Ejercicio 17<br>");
document.writeln(palindrome(word) + "<br><br>");



// Ejercicio 18
let prime = x => {let divi = 0; for (let div = 1; div<=x; div++){ if (x % div == 0) {divi++;}} if (divi > 2) {return false;} else {return true;}};

let number = 17;
let primenumber = prime(number)
document.writeln("Ejercicio 18<br>");
document.writeln(primenumber + "<br><br>");



// Ejercicio 19
let linearSearch = x => {return mynumber == x}

let myarray = [1,2,3,4,5];
let mynumber = 2;
document.writeln("Ejercicio 19<br>");
document.writeln(myarray.some(linearSearch) + "<br><br>");



// Ejercicio 22
let quadraticSolver = (a,b,c) => {let discrim = (b*b - 4*a*c); if (discrim < 0) alert("It's negative"); else { document.writeln("Solution 1: "+ (-b + Math.sqrt(discrim))/(2*a)); document.writeln("Solution 2: "+ (-b - Math.sqrt(discrim))/(2*a));}};

let a = 2;
let b = 5;
let c = 1;

document.writeln("Ejercicio 22<br>");
quadraticSolver(a,b,c);