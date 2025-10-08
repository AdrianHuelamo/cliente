const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function land(x) {
    return x.includes("land")
}

document.writeln(countries.every(land));