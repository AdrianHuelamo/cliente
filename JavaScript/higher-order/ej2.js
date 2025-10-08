const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

function sum(accumulator, currVal){
    if (currVal == "Iceland"){
        return accumulator + " and " + currVal + " are north European countries"
    } else {
        return accumulator + ", " + currVal
    }
}
document.writeln(countries.reduce(sum));