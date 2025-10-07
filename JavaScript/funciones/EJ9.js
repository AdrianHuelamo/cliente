function quadraticSolver(a, b, c) {
    let discrim = (b*b - 4*a*c);
 if (discrim < 0)
    alert("It's negative");
 else {
    document.writeln("Solution 1: "+ (-b + Math.sqrt(discrim))/(2*a));
    document.writeln("Solution 2: "+ (-b - Math.sqrt(discrim))/(2*a));
    }
}

let a = parseInt(prompt("Enter number a: "));
let b = parseInt(prompt("Enter number b: "));
let c = parseInt(prompt("Enter number c: "));

quadraticSolver(a,b,c);