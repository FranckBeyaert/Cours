// Import des classes que nous utilisons en fin de fichier
import Voiture from "./modules/Voiture.js";
import Moto from "./modules/Moto.js";

// Commentaire sur une ligne
/* Commentaire
sur plusieurs
lignes */

/*******************
 * Les Variables
 */
// Déclarer une variable en JS
var prenom;

// Affecter une valeur à notre variable
prenom = "Fred";

// Afficher la valeur de la variable dans la console
console.log(prenom);

// Les types de variables
// On ne définit pas de type à la déclaration mais il y a quand même un type (variable auto typé)
console.log(typeof (prenom));

// Déclarer et affecter sur une même ligne
var age = 99;
console.log(typeof (age));

// Concaténation de chaines (se fait par l'intermédiaire de l'opérateur +)

// Mini exo : créer une concaténation pour afficher dans la console la phrase suivante:
// Bonjour, je m'appelle Jean et j'ai XX ans
console.log("Bonjour je m'appelle " + prenom + " et j'ai " + age + "ans");

/*******************************
 * Les opérateurs arithmétiques
*/
var nb1 = 10, nb2 = 5, resultat;

// L'addition
resultat = nb1 + nb2;
console.log(resultat);

// La soustraction
resultat = nb1 - nb2;
console.log(resultat);

// La multiplication
resultat = nb1 * nb2;
console.log(resultat);

// La division
resultat = nb1 / nb2;
console.log(resultat);

// Le modulo --> reste de la division
resultat = nb1 % nb2;
console.log(resultat);

// Les écritures simplifiées
nb1 = nb1 + 5;
// peut s'écrire plus simplement comme ci-dessous
nb1 += 5;

/*************************************
 * Incrémentation et décrémentation
*/
// Incrémentation
nb1 = nb1 + 1;
// peut se simplifier en
nb1 += 1;
// mais encore mieux
nb1++;

// Décrementation
nb1 = nb1 - 1;
nb1 -= 1;
nb1--;

nb1 = 1;
console.log("nb1 = " + nb1);
console.log(nb1++); // affiche la valeur de nb1 avant incrémentation
console.log("nb1 = " + nb1);

nb1 = 1;
console.log("nb1 = " + nb1);
console.log(++nb1); // effectue l'incrémentation puis affiche la valeur de nb1
console.log("nb1 = " + nb1);

/****************************
 * Les tableaux (numériques)
 */
// Déclaration d'un tableau numérique (2 façons de faire)
var monTableau = [];
var monTableau = new Array();

// Affecter des valeurs à un tableau numérique
monTableau[0] = "Pomme"; // on affecte une valeur à la case en position 0 du tableau
monTableau[1] = "Poire";

// Afficher le contenu du tableau numérique
console.table(monTableau);
console.log(monTableau[0]);
console.log(monTableau[1]);

// Déclarer et affecter en même temps un tableau numérique
var legumes = ["Carotte", "Chou", "Navet"];
var legumes2 = new Array("Carotte", "Chou", "Navet");

// Réaffecter une valeur à une case d'un tableau numérique
console.log(legumes[2]);
legumes[2] = "Tomate";
console.log(legumes[2]);

// Récupérer la taille d'un tableau
console.log(legumes.length);

// Ajouter un élément au tableau
legumes.push("Poireau"); // Ajoute 1 élément
legumes.push("Courgette", "Potiron", "Aubergine");

// Rétirer un élément du tableau
// La méthode pop() va nous permettre de retirer le dernier élément d'un tableau
legumes.pop(); // Retire l'aubergine

// La méthode shift() va nous permettre de retirer le premier élément d'un tableau
legumes.shift(); // Retire la carotte

// La méthode splice() va nous permettre de retirer un ou plusieurs éléments d'un tableau à une position donnée
// tableau.splice(positionDeDemarrage, nbASupprimer);
legumes.splice(2, 2); // Retire le poireau et la courgette

// Nous pouvons aussi ajouter des éléments à une position donnée avec la méthode splice()
legumes.splice(1, 0, "Cornichon");

console.table(legumes);

/***************************
 * Les tableaux associatifs
 */
var personne = {
    nom: "Demarque",
    prenom: "Amaury",
    age: 14
};

console.table(personne);
console.log(personne.prenom);
console.log(personne["nom"]);

/******************************
 * Les tableaux à 2 dimensions
 */
var prenoms = ["Henri", "Vanel", "David"];
var noms = new Array("Journel", "Ntchadji Yonga", "Wils");

// à partir de ces deux tableaux numériques nous allons créer un tableau à 2 dimensions
var annuaire = new Array(prenoms, noms);
console.table(annuaire);
console.log(annuaire[0][1]); // Affiche le prénom Vanel

// Mini exo : afficher la concaténation du prénom David avec le nom Journel
console.log(annuaire[0][2] + " " + annuaire[1][0]);

/*
Exercice
1/ Créer un tableau à deux dimensions contenant trois personnes.
Chaque personne est représenté par son prénom, son nom et son age.

2/ Afficher dans la console la concaténation du prénom et du nom de la 2ème personne
*/
annuaire = [
    {
        nom: "Mimouni",
        prenom: "Sofiane",
        age: 14
    },
    {
        nom: "Godet",
        prenom: "Jean-Philippe",
        age: 15
    },
    {
        nom: "Delaere",
        prenom: "Damien",
        age: 16
    }
];
console.log(annuaire[1].nom + " " + annuaire[1]["prenom"]);

/**************************************
 * Afficher une alerte à l'utilisateur
 */
//alert("Coucou toi !");

/**************************************
 * Demander une saisie à l'utilisateur
 */
//prenom = prompt("Quel est ton prénom ?");
//console.log(prenom);
// Attention si la valeur saisie n'est pas stockée dans une variable, la valeur est perdue...

/*************************************
 * Les fonctions
 */
// Lorsque les parenthèses d'une fonction sont vides cela signifie qu'elle ne prend pas de paramètre
function hello() {
    // Lors de l'appel à la fonction hello les insctructions ci-dessous sont éxécutées
    alert("Hello World !");
}

// Appel à la fonction hello
//hello();

function bonjour(prenom) {
    // Ici, prenom est un paramètre, ce paramètre ne sera utilisable que dans la fonction
    alert("Bonjour " + prenom);
}

//bonjour("Pierre Alexis");

/*
Exercice
1/ Ecrire une fonction permettant d'effectuer le calcul du perimetre
Indice : l'équivalent de l'instruction Retourner vue en Algo est l'instruction return en JS

2/ Demander à l'utilisateur de saisir la longueur et la largeur

3/ Appeler la fonction précédemment créée avec les valeurs saisies par l'utilisateur

4/ Afficher le résultat dans la console
*/
// 1
function perimetre(longueur, largeur) {
    // resultat est une variable locale, elle n'existe que dans la fonction perimetre
    var resultat = (longueur + largeur) * 2

    return resultat;
}

//console.log(perimetre(10, 5));

// 2
// var long = Number(prompt("Saisir une longueur"));
// var larg = Number(prompt("Saisir une largeur"));
// console.log(typeof(long)); // Attention le prompt retourne une chaine même pour les nombres ! Solution --> Number() ou parseInt() pour tranformer une chaine en nombre

// // 3 & 4
// var result = perimetre(long, larg);
// console.log(result);

/*****************************
 * Les conditions
 * 
 * En algo une condition s'écrit :
 * 
 * Si (condition) alors
 *  instructions
 * FinSi
 * 
 * En JS :
 * 
 * if(condition) {
 *  instructions
 * }
 */
// age = prompt("Saisir votre age");

// if(age >= 18) {
//     alert("Bienvenue sur notre site, tu es majeur !");
// } else {
//     alert("Tu n'es pas majeur ! Tchao !");

//     // Redirection vers Google
//     window.location = "http://google.fr";
// }

/**********************************
 * Les opérateurs de comparaison
 * 
 *      == signifie égal à
 *      Il permet de vérifier que la valeur de deux variables sont identiques
 * 
 *      === signifie strictement égal à
 *      Il va comparer la valeur ET le type de deux variables
 * 
 *      != signifie différent de
 *      Il permet de vérifier que la valeur de deux variables sont différentes
 * 
 *      !== signifie strictement différent de
 *      Il va vérifier si la valeur OU le type sont différents
 * 
 * Exemples
 * 
 * 1 == 1 --> vrai
 * "1" == 1 --> vrai
 * 1 != 2 --> vrai
 * 1 != "1" --> faux
 * 3 === 3 --> vrai
 * 3 === "3" --> faux
 * 3 !== "3" --> vrai
 * 4 !== 3 --> vrai
 * 
 * Exercice
 * 
 * Nous disposons de deux variables email et mdp contenant respectivement l'email et le mot de passe pour accéder à un espace sécurisé
 */
var email = "contact@teamdotnet.fr";
var mdp = "leLundiAuSoleil";

/**
 * 1/ Demander à l'utilisateur de saisir un email et un mot de passe
 * 2/ Vérifier que l'email est identique à la variable email
 * 3/ Vérifier que le mot de passe est identique à la variable mdp
 * 4/ Si OK alors on affiche un message de bienvenue
 * 5/ Sinon on indique à l'utilisateur l'information incorrecte
 */

// 1
// var userEmail = prompt("Saisir votre email");
// var userPwd = prompt("Saisir votre mot de passe");

// // 2
// if(userEmail == email) {
//     // 3
//     if(userPwd == mdp) {
//         // 4 
//         alert("Bienvenue sur notre espace sécurisé");
//     } else {
//         // 5
//         alert("Mot de passe incorrect");
//     }
// } else {
//     alert("Email non reconnu");
// }

/********************************
 * Les opérateurs logiques
 * 
 * L'opérateur ET : &&
 * 
 * Exemple : Tester en même temps si l'email ET le mot de passe sont identiques
 */
//if((userEmail == email) && (userPwd == mdp)) {
// La condition sera remplie si et seulement si les deux tests donnent la valeur VRAI
// Cf table de vérité
//}

/***************************
 * L'opérateur OU : ||
 * 
 * Exemple : Tester si un nombre est inférieur à 1 OU supérieur à 3
 */
var nb = 5;
if ((nb < 1) || (nb > 3)) {
    console.log("Le nombre n'est pas compris entre 1 et 3");
    // La condition sera remplie si l'une des deux conditions est vraie
    // Cf table de vérité
}

/****************************
 * L'opérateur NON / CONTRAIRE DE : !
 */
var pause = true;
if (!pause) {
    console.log("Ce n'est pas l'heure de la pause !");
}
// équivalent à if(pause == false) { ... }
// différent de
if (pause) {
    console.log("C'est l'heure de la pause !");
}
// équivalent à if(pause == true) { ... }

/*********************************
 * Les boucles
 */

// La boucle TANT QUE : WHILE
var i = 1;
while (i <= 10) {
    console.log("Instruction while exécutée " + i + " fois");
    i++;
}

// La boucle FAIRE ... TANT QUE : do...while
do {
    // A la différence de la boucle while les instructions d'un do while seront éxécutées au moins une fois
    console.log("Instruction do while exécutée " + i + " fois");
    i++;
} while (i <= 10);

// La boucle POUR : FOR
for (var j = 1; j <= 10; j++) {
    console.log("Instruction for exécutée " + j + " fois");
}

/**
 * Exercice
 * A partir du tableau numérique suivant :
 */
var names = ["Pauline", "Nicolas", "Arouna", "Gauthier", "Florian"];
/**
 * 1/ Gràce à une boucle FOR, afficher la liste des prenoms du tableau
 * 2/ Gràce à une boucle WHILE, afficher la liste des prenoms du tableau
 */
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

/*******************************
 * La boucle FOR...IN
 * 
 * Idéale pour parcourir un tableau associatif
 * Pourquoi ? Car elle va nous permettre de parcourir chaque "clé" du tableau/objet et donc nous permettre de récupérer la valeur associée à cette clé
 */
var contact = {
    nom: "Souali",
    prenom: "Mehdi",
    telephone: "0123456789"
};

for (var key in contact) {
    console.log(key + " : " + contact[key]);
}

/**
 * Exercice
 */
var etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            francais: 5,
            anglais: 15,
            economie: 10
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            francais: 5,
            anglais: 15,
            economie: 10,
            informatique: 14
        }
    }
];

/**
 * A partir du tableau ci-dessus :
 * 
 * 1/ Afficher la liste des etudiants (Prenom Nom)
 * 
 * 2/ Pour chaque étudiant, afficher la liste des matières et la note associée à chaque matière
 * 
 * 3/ Pour chaque étudiant, calculer et afficher la moyenne générale
 */

var cumul, nbNotes, moyenne;

// 1 - Boucle qui permet de parcourir les étudiants
for (var i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i].prenom + " " + etudiants[i].nom);

    // Initalisation pour chaque étudiant
    cumul = 0;
    nbNotes = 0;

    // 2 - Boucle qui permet de parcourir toutes les matières pour chaque étudiant
    for (var key in etudiants[i].matieres) {
        console.log(key + " : " + etudiants[i].matieres[key]);

        // 3.a - Cumul des notes d'un étudiant
        cumul += etudiants[i].matieres[key];
        nbNotes++;
    }

    // 3.b - Calcul de la moyenne
    moyenne = cumul / nbNotes;
    console.log("Moyenne générale : " + moyenne);
}

// for ... of
// On parcourt tous les étudiants d'un tableau d'étudiants et la variable etudiant prend un nouvel etudiant à chaque tour de boucle
for(var etudiant of etudiants) {
    console.log(etudiant.prenom + " " + etudiant.nom);

    // Initalisation pour chaque étudiant
    cumul = 0;
    nbNotes = 0;

    // 2 - Boucle qui permet de parcourir toutes les matières pour chaque étudiant
    for (var key in etudiant.matieres) {
        console.log(key + " : " + etudiant.matieres[key]);

        // 3.a - Cumul des notes d'un étudiant
        cumul += etudiant.matieres[key];
        nbNotes++;
    }

    // 3.b - Calcul de la moyenne
    moyenne = cumul / nbNotes;
    console.log("Moyenne générale : " + moyenne);
}

/****************************
 * Objets
 * Nous verrons un peu plus tard en ES6 la notion de Classes qui remplacera ce que nous allons voir maintenant
 */
// Déclarer un Objet
// function Voiture(marque, modele, kilometrage, annee) {
//     // mot clé this : symbolise l'instance qui a déclenché l'appel
//     this.marque = marque;
//     this.modele = modele;
//     this.kilometrage = kilometrage;
//     this.annee = annee;

//     this.display = function() {
//         var result = this.marque + " - " + this.modele + " - " + this.kilometrage + " - " + this.annee;
//         return result;
//     }
// }
// // Instancier un Objet
// var v1 = new Voiture("Renault", "Clio", 12000, 2010);
// console.log(v1.marque + " " + v1.modele);
// console.log(v1.display());

/********************************
 * Introduction ES6
 */

 /******************************
  * let
  * Jusqu'à présent nous avons déclaré nos variables avec le mot clé var
  * Dès maintenant nous allons utiliser le mot clé let à la place et voici pourquoi :
  */
console.log(testPrenomVar); // undefined --> pour lui la variable est déjà déclaré --> problème de hoisting (remontée de la déclaration de variables)
//console.log(testPrenomLet); // erreur variable non déclaré !
var testPrenomVar = "Jean";
let testPrenomLet = "Pierre";

/****************
 * const
 */
const nbMax = 6;
// nbMax = 7; // Syntax error

const fruits = ["Pomme"];
// fruits = ["Pomme", "Poire"]; // Syntax error
fruits.push("Poire"); // Possible car on ne "touche" pas à la structure de la constante à savoir un tableau numérique

/*****************
 * .map
 * .find
 * .filter
 */
const vegetables = [
    {
        code: 11,
        name: "Carotte",
        price: 1.99
    },
    {
        code: 12,
        name: "Poivron vert",
        price: 2.99
    },
    {
        code: 13,
        name: "Poivron rouge",
        price: 2.99
    },
    {
        code: 14,
        name: "Chou",
        price: 3.99
    }
]; 

// .map
const listVegetables = vegetables.map(function(vegetable) {
    return vegetable.name;
});
console.log(listVegetables);

// Trouver un élément --> .find
const carotte = vegetables.find(function(vegetable) {
    return vegetable.name.includes("Carotte");
});
console.log(carotte);

// Trouver tous les éléments --> .filter
const poivrons = vegetables.filter(function(vegetable) {
    return vegetable.name.includes("Poivron");
});
console.log(poivrons);

/***********************
 * Fonctions fléchées --> Arrow function
 * Pour écrire une fonction fléchée nous allons utiliser un opérateur que l'on appelle fat arrow =>
 */
let test = function() {
    return "Toto";
} // équivalent à
test = () => {
    return "Toto";
} // équivalent à (uniquement si votre callbackfn ne contient qu'un return)
test = () => "Toto";

let test2 = function(vegetable) {
    return vegetable.name;
} // équivalent à 
test2 = vegetable => {
    return vegetable.name;
} // équivalent à (uniquement si votre callbackfn ne contient qu'un return)
test2 = vegetable => vegetable.name;

let test3 = function(firstname, lastname) {
    return firstname + " " + lastname;
} // équivalent à 
test3 = (firstname, lastname) => {
    return firstname + " " + lastname;
} // équivalent à (uniquement si votre callbackfn ne contient qu'un return)
test3 = (firstname, lastname) => firstname + " " + lastname;

/*******************
 * rest operator
 * ...
 */
// let chou = vegetables[3]; cause une référence au tableau et la copie n'en est pas vraiment une...
// Welcome rest operator
let chou = { ...vegetables[3] };
chou.price = 2.99;
console.log(chou);
console.log(vegetables[3]);

/**************************
 * Littéraux de gabarits
 * Derrière ce nom se cache une sorte de templating en JS permettant de simplifier la concaténation de chaines et de variables
 * Avec cette notation on utilise des anti quotes (``) à la place des doubles quotes ("")
 */
let firstname = "Jean";
let lastname = "Dupont";

console.log("Bonjour " + firstname + " " + lastname); // ça c'était avant :)
console.log(`Bonjour ${firstname} ${lastname}, tu vas bien ?`); // trop top génial !

/********************************************************
 * Valeurs par défaut pour les paramètres d'une fonction
 */
function carre(nb = 10) {
    return nb*nb;
}

carre();
carre(5);

/**************************
 * Classes
 * L'ES6 introduit les classes et ça fait plaisir !
 */
class Developer {
    // Constructeur de la classe Developer, on peut le voir comme une "usine" à objet Developer
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Méthode de la classe Developer, on ne pourra l'appeler que sur une instance de la classe Developer
    getName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

/**
 * Héritage
 * comment procéder ? le mot clé extends suivi du nom de la classe que l'on veut hériter
 */
class JSDeveloper extends Developer {
    getJob() {
        return "Développeur JS";
    }

    display() {
        // le mot clé super fait référence à la classe parente (classe héritée)
        return `${super.getName()} - ${this.getJob()}`
    }
}

let dev = new Developer("Amaury", "Demarque"); // appel du constructeur
console.log(dev.getName()); // appel de la méthode getName

let jsdev = new JSDeveloper("Henri", "Journel");
console.log(jsdev.display());



let voiture = new Voiture("Citroen", "C4", 100000, 2011, true);
let moto = new Moto("Kawazaki", "Z900", 10000, 2015);

console.log(voiture.display());
console.log(moto.display());

// Ternaire : ?
let clim = false;
if(clim) {
    console.log("Oui");
} else {
    console.log("Non");
}
// équivalent avec un ternaire à
clim ? console.log("oui") : console.log("non");