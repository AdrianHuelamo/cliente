let myarray = ["a", "b", "c", "d", "e"];
document.writeln(myarray);

let position = parseInt(prompt("Enter a index: "));

if (position <= myarray.length && position >=0) {
    document.writeln("<br>The word is: " + myarray[position]);
} else if (position > myarray.length || position < 0) {
    document.writeln("<br>Error: The number is bigger than array or is negative");
} else {
    document.writeln("<br>Error")
}