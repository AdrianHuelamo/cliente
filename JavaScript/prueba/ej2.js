document.addEventListener("DOMContentLoaded", () => {
  let check = document.querySelectorAll("#season");
  let mychecks = Array.from(check);

  mychecks.forEach((ok) => {
    ok.addEventListener("change", (s) => {
      if (ok.checked) {
        let select = document.querySelector("#seasons");
        let option = document.createElement("option");
        option.textContent = ok.name;
        select.appendChild(option);
      } else {
        let options = document.querySelectorAll("option");
        let myoptions = Array.from(options);
        myoptions.forEach((o) => {
            if(o.textContent === ok.name) {
                o.remove();
            };
        });
      };
    });
  });
});
