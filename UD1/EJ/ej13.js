let myname = "I am Adrian";

let myarray = myname.split(" ");

document.writeln(myname+"<br>");
document.writeln("The array have " + myarray.length + " words<br>");
document.writeln("The first word is: " + myarray[0] + "<br>");
document.writeln("The lat word is: " + myarray[myarray.length-1] + "<br>");
document.writeln(myarray.reverse().join(" ") + "<br>");
document.writeln(myarray.sort().join(" ") + "<br>")
document.writeln(myarray.sort((a,b) => b.localeCompare(a)).join(" "))