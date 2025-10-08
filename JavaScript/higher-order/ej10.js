function getStringLists(x) {
    if (typeof x === "string"){
        return x
    }
}

let myarray = ["a", 4, "pedo", 8, "hola", 33]
document.writeln(myarray.filter(getStringLists).join(", "));
