let random = parseInt(Math.floor(Math.random() * 10) + 1);
let number = parseInt(prompt("Enter a number: ").trim());

if (random == number) {
  alert("Well done");
} else {
  alert("Sorry, wrong guess...");
}
