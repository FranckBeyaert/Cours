"use strict";
// ! Ne fonctionne pas, trouvé la raison !
// const choice = [...document.getElementsByTagName("button")].forEach(function(item)
// {
//     item.addEventListener("click", function()
//     {
//         obj[this.id]();
//     })
// })
// const obj = 
// {
//     pierre: function(): void
//     {
//         console.log("pierre");
//     },
//     papier: function():void
//     {
//         console.log("papier");
//     },
//     ciseaux: function():void
//     {
//         console.log("ciseaux");
//     }
// }
const pierre = document.getElementById("pierre");
const papier = document.getElementById("papier");
const ciseaux = document.getElementById("ciseaux");
const p = pierre.addEventListener("click", function (e) {
    console.log("pierre");
});
const paper = papier.addEventListener("click", function (e) {
    console.log("papier");
});
const cis = ciseaux.addEventListener("click", function (e) {
    console.log("ciseaux");
});
var plays;
(function (plays) {
    plays[plays["pierre"] = 0] = "pierre";
    plays[plays["papier"] = 1] = "papier";
    plays[plays["ciseaux"] = 2] = "ciseaux";
})(plays || (plays = {}));
var Player;
(function (Player) {
    Player["USER"] = "user";
    Player["COMPUTER"] = "computer";
})(Player || (Player = {}));
function userPlay() {
    computerPlay();
}
function computerPlay() {
    const computer = Math.round(Math.random() * 2) + 1;
    document.getElementsByTagName("choice");
}
