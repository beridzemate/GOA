//first hw

function infoJoin(firstName, lastName, age, residence, hobby) {
    return `My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${residence}. My hobby is ${hobby}.`;
}

let firstName = "Mate";
let lastName = "Beridze";
let age = 14;
let residence = "Your City";
let hobby = "coding and learning programming";

let info = infoJoin(firstName, lastName, age, residence, hobby);
console.log(info);
