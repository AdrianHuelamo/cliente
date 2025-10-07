function leap(x) {
  if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
    return "TRUE";
  } else {
    return "FALSE"
  }
}

let year = parseInt(prompt("Enter a year: "));
let years = [year]
let yearleap = years.some(leap);
document.writeln(yearleap)