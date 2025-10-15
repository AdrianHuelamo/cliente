let myset = new Set([]);
let cont = true;

while (cont === true){
    let city = prompt("Enter a city: ");
    if (city != "stop") {
        myset.add(city);
    } else {
        cont = false;
    }
}

console.log(myset);

myset.forEach((value) => {
    document.writeln(value + "<br>");
})

let newarray = Array.from(myset);
newarray.sort();
let myset2 = new Set(newarray);
console.log(myset2);