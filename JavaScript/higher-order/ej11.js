const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function seven(x) {
    if (x.length > 7){
        return x
    }
}

document.writeln(countries.some(seven));