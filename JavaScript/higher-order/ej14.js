const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function found(x) {
    if (x.length == 6) {
        return x;
    }
}

document.writeln(countries.find(found));