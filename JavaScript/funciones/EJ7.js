function average (x) {
    let total = 0;
    let cantidad = myarray.length;
    for (n of x) {
        total = total + n;
    }
    let avg = total/cantidad;
    if (avg == 0){
        return undefined;
    } else {
        return avg;
    }
}

let myarray = [1,3,5,8];
document.writeln(average(myarray));