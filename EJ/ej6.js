let year = parseInt(prompt("Enter a year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert("This year is a leap");
} else {
  alert("This year isn't a leap");
}
