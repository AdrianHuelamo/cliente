const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

let capital = x => x.split(" ").map(y => y.length);

document.writeln(countries.map(capital).join(", "));