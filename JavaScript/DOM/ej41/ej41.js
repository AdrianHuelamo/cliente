window.onload = function() {
    //1
    let advUl = document.querySelector("#adv ul");
    let newLi = document.createElement("li");
    newLi.textContent = "Soporte telefónico 365";
    advUl.appendChild(newLi);

    //2
    let adv = document.querySelector("#adv");
    let position = document.querySelector(".both")
    adv.remove();
    position.appendChild(adv);

    //3
    let button = document.querySelector("#adv button");
    button.textContent = "Start Now";
    button.style.backgroundColor = "#005090";
    button.style.color = "white";

    
    //4
    let liteFeatures = document.querySelector("#lite .list");
    let advFeatures = document.querySelector("#adv .list");

    function updateStorage(listElement, percentage) {
      const items = listElement.querySelectorAll("li");
    
      items.forEach(li => {
        if (li.textContent.includes("storage")) {
          let currentStorage = parseFloat(li.textContent.match(/\d+/)[0]);
          let newStorage = currentStorage * (1 + percentage / 100);
          newStorage = Math.round(newStorage * 100) / 100;
          li.textContent = `${newStorage} TB of storage included`;
        }
      });
    }

    updateStorage(liteFeatures, 50);
    updateStorage(advFeatures, 25);

}