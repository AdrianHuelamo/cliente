let map = new Map([
    ["jose", "profesor"],
    ["lorenzo", "profesor"],
    ["nuria", "estudiante"],
    ["vicente", "estudiante"],
    ["joselu", "ninfomano"],
])

let newname = prompt("Enter a name: ");

if (map.has(newname)) {
    alert(newname + " is a " + (map.get(newname)));
} else {
    alert(newname + " doesn't exist in this data colection");
}