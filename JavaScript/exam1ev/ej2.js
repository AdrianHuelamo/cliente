document.addEventListener("DOMContentLoaded", () => {
    let minuts = parseInt(prompt("Enter a minuts"));

    let h = minuts/60;
    let rest = minuts%60;

    let time = [Math.floor(h), rest];
    document.writeln(time +  "<br>");
    document.writeln(time[0] + " hours and " + time[1] + " minutes.");
})