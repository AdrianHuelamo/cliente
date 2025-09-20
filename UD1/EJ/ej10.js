let number = [1];
let num = 1;
let point = ["*","*","*","*","*","*","*"];

while (point.length > 0) {
    point.pop();
    console.log(number.join("") + point.join(""));
    num++;
    number.push(num);
}