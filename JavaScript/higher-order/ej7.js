const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function land(x) {
    if (x.length === 6){
        return x
    }
}

document.writeln(countries.filter(land).join(", "));