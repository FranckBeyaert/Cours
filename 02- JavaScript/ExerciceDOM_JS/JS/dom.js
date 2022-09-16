// Récupére l'élement qui a l'id myId
const myId= document.getElementById('myId');
console.log(myId);

//Récupére une collection d'éléments qui ont la classe myClass
const myClass = document.getElementsByClassName('myClass');
console.log(myClass);

//Récupére une collection d'éléments qui ont la balise ul
const ul = document.getElementsByTagName('ul');
console.log(ul);

//Récupére le 1er élément qui répond au sélecteur CSS spécifié en param
const myId2 = document.querySelector('#toto');
console.log(myId2);


//Récupére une collection d'éléments qui répondent au select CSS spécifié en param
const myCLass2 = document.querySelectorAll(".myClass");
console.log(myCLass2);

console.log(document.querySelector(".myClass:nth-child(3)").textContent = "première div");
console.log(document.querySelector(".myClass:nth-child(4)").textContent = "deuxième div");
console.log(document.querySelector(".myClass:nth-child(5)").textContent = "troisième div");

let google = document.getElementById('googleId');
console.log(google.href);
console.log(google.id);
console.log(google.className);
google.textContent = "Mon lien vers Google";
console.log(google.textContent);
//document.querySelector(".googleClass").remove();
//document.querySelector(".myClass").innerText = "modifié";
document.querySelector("#myId").innerHTML = "<span class='para'>paragraphe ajouté<span>";

/*
let p = document.createElement("p");
p.id = "newParagraphe";
p.textContent = "Mon paragraphe créé en JS:)";

document.body.appendChild(p);

let myId3 = document.getElementById("myId");
myId3.appendChild(p);

p.classList.add("color-red","text-uppercase");
console.log(p.classList);
p.classList.remove("text-uppercase");
*/

document.querySelector(".myClass:nth-child(3)").classList.add("div1");
document.querySelector(".myClass:nth-child(4)").classList.add("div2");
document.querySelector(".myClass:nth-child(5)").classList.add("div3");

const h1 = document.createElement("h1");
h1.id="welcome";
const prenom = "Franck";
h1.textContent = `Bonjour ${prenom}`;
document.body.appendChild(h1);


