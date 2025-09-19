let myarray =[];
let a = 0;

while (a < 3){
    let numero = parseInt(prompt("Enter a number: "))
    myarray.push(numero);
    a++;
}

function comparar(a,b) {
    return a - b;
}

console.log(myarray.sort(comparar));
