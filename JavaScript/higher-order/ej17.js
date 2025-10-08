const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
];

let found = (x) => x === "Russia";
let idx = countries.findIndex(found);

if (idx != -1) {
  document.writeln("Russia is in the " + idx + "th position");
} else {
  document.writeln("Russia not found");
}