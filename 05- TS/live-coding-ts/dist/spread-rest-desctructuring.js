"use strict";
const sports = ["Football", "Rugby", "BasketBall"];
const sports2 = ["Tennis"];
sports2.push(...sports);
console.log(sports2);
const personne = {
    firstname: "David",
    age: 35
};
const copiePersonne = Object.assign({}, personne);
copiePersonne.firstname = "Toto";
console.log(personne);
console.log(copiePersonne);
const add2 = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    });
};
const additionNombre = add2(5, 10, 2, 3.9);
console.log(additionNombre);
const [sport1, sport2, ...autresSport] = sports2;
console.log(sports2, sport1, sport2, autresSport);
const { firstname: prenom, age } = personne;
console.log(prenom, age, personne);
