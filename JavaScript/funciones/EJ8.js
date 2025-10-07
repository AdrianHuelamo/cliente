function average (x) {
    let total = 0;
    let cantidad = myarray.length;
    for (n of x) {
        total = total + n;
    }
    let avg = total/cantidad;
    if (avg > mynumber){
        return false;
    } else if (avg < mynumber) {
        return true;
    } else {
        return "It's the same number"
    }
}

let myarray = [1,3,5,8];
let mynumber = parseFloat(prompt("Enter a number: "))
document.writeln(average(myarray));