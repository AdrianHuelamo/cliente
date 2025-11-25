document.addEventListener("DOMContentLoaded", () => {
    let prices = [10,15,20,6,4,2,8,26,7,14];
    let tax = prices.map((x) => {return x + x/10});
    document.writeln(tax);
})