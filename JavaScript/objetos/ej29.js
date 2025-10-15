let myhome = {
    "address": "street joselu presidente",
    "rooms": 3,
    "squareMeters": 69,
    "extras": ["2 toilets", "new windows"]
}

for (var prop in myhome) {
    console.log(prop + ": " + myhome[prop])
}

myhome.elevator = false;

delete myhome.squareMeters;

let exist = myhome.hasOwnProperty("squareMeters");

console.log("Exist square meters? " + exist);

let exist2 = myhome.hasOwnProperty("rooms");

console.log("Exist rooms? " + exist2);

console.table(myhome);