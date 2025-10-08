function wordCount(accu, letter) {
    let vowels = "aeiouAEIOU";
    if (vowels.includes(letter)){
        return accu + 1 ;
    } else {
        return accu
    }
}
let str = prompt("Enter a string: ");
let array = str.split(" ").join("").split("");
document.writeln("The string has: " + array.reduce(wordCount, 0) + " vowels");