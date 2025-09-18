let fruit = prompt("Enter your fruit: ").trim();

switch (fruit) {
  case "banana":
    alert("Bananas are good");
    break;

  case "orange":
    alert("I'm not a fan of oranges");
    break;

  case "apple":
    alert("Oh really, do you like apples?");
    break;

  default:
    alert("Enter other fruit");
    break;
}
