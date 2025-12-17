document.addEventListener("DOMContentLoaded", startApp);

function startApp() {
  const laptops = [
    {
      id: 482,
      brand: "Dell",
      model: "XPS 13",
      RAM: 16,
      processor: "Intel Core i7-1250U",
      hardDisk: "512GB SSD",
      price: 1299,
    },
    {
      id: 219,
      brand: "Apple",
      model: "MacBook Pro 14 M3",
      RAM: 18,
      processor: "Apple M3",
      hardDisk: "512GB SSD",
      price: 1999,
    },
    {
      id: 367,
      brand: "Lenovo",
      model: "Legion 5 Pro",
      RAM: 16,
      processor: "AMD Ryzen 7 7840HS",
      hardDisk: "1TB SSD",
      price: 1599,
    },
    {
      id: 540,
      brand: "HP",
      model: "Pavilion 15",
      RAM: 8,
      processor: "Intel Core i5-1335U",
      hardDisk: "512GB SSD",
      price: 699,
    },
    {
      id: 801,
      brand: "Asus",
      model: "ROG Strix G16",
      RAM: 16,
      processor: "Intel Core i7-13650HX",
      hardDisk: "1TB SSD",
      price: 1499,
    },
    {
      id: 105,
      brand: "Acer",
      model: "Aspire 5",
      RAM: 8,
      processor: "Intel Core i5-1235U",
      hardDisk: "512GB SSD",
      price: 549,
    },
    {
      id: 934,
      brand: "MSI",
      model: "Stealth 14 Studio",
      RAM: 16,
      processor: "Intel Core i7-13700H",
      hardDisk: "1TB SSD",
      price: 1799,
    },
    {
      id: 628,
      brand: "Samsung",
      model: "Galaxy Book3 Ultra",
      RAM: 16,
      processor: "Intel Core i7-13700H",
      hardDisk: "1TB SSD",
      price: 2399,
    },
    {
      id: 413,
      brand: "Huawei",
      model: "MateBook X Pro 2023",
      RAM: 16,
      processor: "Intel Core i7-1360P",
      hardDisk: "1TB SSD",
      price: 1899,
    },
    {
      id: 752,
      brand: "Razer",
      model: "Blade 16",
      RAM: 32,
      processor: "Intel Core i9-13950HX",
      hardDisk: "2TB SSD",
      price: 3699,
    },
    {
      id: 587,
      brand: "Microsoft",
      model: "Surface Laptop 5",
      RAM: 16,
      processor: "Intel Core i7-1255U",
      hardDisk: "512GB SSD",
      price: 1299,
    },
    {
      id: 330,
      brand: "LG",
      model: "Gram 16",
      RAM: 16,
      processor: "Intel Core i7-1360P",
      hardDisk: "1TB SSD",
      price: 1599,
    },
    {
      id: 991,
      brand: "Gigabyte",
      model: "Aero 16 OLED",
      RAM: 16,
      processor: "Intel Core i7-13700H",
      hardDisk: "1TB SSD",
      price: 1699,
    },
    {
      id: 476,
      brand: "Alienware",
      model: "m16 R2",
      RAM: 32,
      processor: "Intel Core Ultra 7 155H",
      hardDisk: "1TB SSD",
      price: 2299,
    },
    {
      id: 254,
      brand: "Toshiba",
      model: "Dynabook Tecra A40-K",
      RAM: 16,
      processor: "Intel Core i7-1260P",
      hardDisk: "512GB SSD",
      price: 1099,
    },
  ];

  const container = document.querySelector(".container");


  function drawLaptop(laptop) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = laptop.id;
    let brand = document.createElement("h2");
    let ram = document.createElement("p");
    let processor = document.createElement("p");
    let hardDisk = document.createElement("p");
    let price = document.createElement("p");

    brand.textContent = laptop.brand + " " + laptop.model;
    ram.textContent = "RAM: " + laptop.RAM;
    processor.textContent = laptop.processor;
    hardDisk.textContent = laptop.hardDisk;
    price.textContent = laptop.price;

    card.appendChild(brand);
    card.appendChild(ram);
    card.appendChild(processor);
    card.appendChild(hardDisk);
    card.appendChild(price);

    container.appendChild(card);

  }

  function drawAllLaptops(laptops) {
    laptops.forEach(laptop => {
      drawLaptop(laptop);
    });
  }

  function cleanContainer() {
    container.innerHTML = "";
  }

  const backButton = document.querySelector("#back");
  const pageInfo = document.querySelector("#page-info");
  const nextButton = document.querySelector("#next");
  let currentPage = 1;
  const elementPerPage = 4;

  let getTotalPages = () => Math.ceil(laptops.length / elementPerPage);

  function getDataSlice(page) {
    let startSlice = page * elementPerPage - elementPerPage;
    let endSlice = page * elementPerPage;
    return laptops.slice(startSlice, endSlice);

  }

  function drawPage() {
    cleanContainer();
    manageButtons();
    pageInfo.textContent = currentPage + " / " + getTotalPages();
    let laptopSlice = getDataSlice(currentPage);
    drawAllLaptops(laptopSlice);
  }

  function nextPage() {
    currentPage++;
    drawPage();
  }

  function previousPage() {
    currentPage--;
    drawPage();
  }

  function manageButtons() {
    if (currentPage == 1) {
      backButton.disabled = true
    } else {
      backButton.disabled = false
    }
    if (currentPage == getTotalPages()) {
      nextButton.disabled = true
    } else {
      nextButton.disabled = false
    }
  }

  backButton.addEventListener("click", previousPage);
  nextButton.addEventListener("click", nextPage);
  drawPage();

}
