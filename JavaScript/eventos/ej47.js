document.addEventListener("DOMContentLoaded", () => {
  let myDivs = document.querySelectorAll("div");

  myDivs.forEach((myDiv) => {
    let myh1 = myDiv.querySelector("h1");
    let myp = myDiv.querySelector("p");
    const myBtn = myDiv.querySelector("input[type=button]");
    myBtn.addEventListener("click", function () {
      if (myBtn.value === "HIDE") {
        myh1.style.display = "none";
        myp.style.display = "none";
        myBtn.value = "SHOW";
      } else if (myBtn.value === "SHOW") {
        myh1.style.display = "block";
        myp.style.display = "block";
        myBtn.value = "HIDE";
      }
    });
    myDiv.addEventListener("mouseover", function() {
        myDiv.style.backgroundColor = "lightblue";
    });
    myDiv.addEventListener("mouseout", function() {
        myDiv.style.backgroundColor = "lightgray";
    });
  });
});
