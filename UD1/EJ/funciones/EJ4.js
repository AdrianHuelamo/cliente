function palindrome(x) {
    return x.split("").reverse().join("")== x; 
}

let word = prompt("Enter a word: ");
alert(palindrome(word));