function sum(x) {
    let n = 0;
    for (let div = 1; div<=x; div++){
        if (div % 3 == 0 && div % 5 == 0) {
            n +=div;
       }
    }
    return n
}

let number = parseInt(prompt("Enter a number (under 1000): "));
if (number < 1000) {
    let sumnumber = sum(number);
    document.writeln(sumnumber);
    } else {
        alert("Number > 1000")
    }