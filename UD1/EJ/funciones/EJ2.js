function even(x) {
    return x % 2 !== 0;
}

let myarray = [1,2,3,4,5];
let evenarray = myarray.filter(even);
document.writeln(evenarray);