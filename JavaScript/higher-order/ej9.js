const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function land(x) {
    if (x.charAt(0) == "E" ){
        return x
    }
}

document.writeln(countries.filter(land).join(", "));