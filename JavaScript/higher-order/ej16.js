const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
];

let found = (x) => x === "Norway";
let idx = countries.findIndex(found);

if (idx != -1) {
  document.writeln("Norway is in the " + idx + "th position");
} else {
  document.writeln("Norway not found");
}

