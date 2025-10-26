let users = []
let even = []
while(true){
    let conf = confirm("Do you want add other user?")
    if (conf){
        let user = {
            name: prompt("Enter a name: "),
            surname: prompt("Enter a surname: "),
            age: prompt("Enter an age: ")
        }
        if (!isNaN(user["age"]) && user["age"] >= 0){
            users.push(user);
        } else {
            alert("Age not valid!!! Joselu dejame ver a los niños")
        }
    } else {
        break;
    }
}
console.log(users);

function u21(x){
    return x.age <= 21;
}+
function ageEven(x){
    if (x.age % 2 == 0){
        even.push(x.name + " " + x.surname + " " + x.age + " ");
    }
}

let under21 = users.every(u21);

if (under21){
    users.filter(ageEven);
} else {
    alert("Age >21 Joselu cariño te quiero, volvamos juntos")
}

document.writeln(even.join(", "))