function prime(x) {
    let divi = 0;
    for (let div = 1; div<=x; div++){
        if (x % div == 0) {
            divi++;
       }
    }
    if (divi > 2) {
        return false;
    } else {
        return true;
    }
}

let number = parseInt(prompt("Enter a number: "));
let primenumber = prime(number)
document.writeln(primenumber);