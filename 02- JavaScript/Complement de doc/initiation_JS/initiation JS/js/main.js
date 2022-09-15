// // Commentaire sur une ligne

// /*
//     Commentaire en bloc
// */

// // Ctrl + :    ===> Mettre en commentaire automatiquement

// /*******************
//  * Les Variables
//  */
// // Déclarer une variable en JS (version ES6)
// let prenom;

// // Affecter une valeur à notre variable
// prenom = "David";

// // Afficher la valeur de la variable dans la console
// console.log(prenom);

// // Les types de variables
// // On ne définit pas de type à la déclaration mais il y a quand même un type (variable auto typé)
// console.log(typeof prenom);

// // Déclarer et affecter sur une même ligne
// let age = 99;
// console.log(typeof age);

// // Concaténation de chaines (se fait par l'intermédiaire de l'opérateur +)

// // Mini exo : créer une concaténation pour afficher dans la console la phrase suivante:
// // Bonjour, je m'appelle Jean et j'ai XX ans
// console.log("Bonjour je m'appelle " + prenom + " et j'ai " + age + " ans");

// // une autre façon de concaténer avec `` ${}
// console.log(
//   `Bonjour je m'appelle ${prenom} et j'ai ${age} ans avec une autre méthode`
// );

// // Mini exo : décrire votre voisin : changer les variables prénom et age puis manquer :
// // Mon voisin s'appelle Robert, il a XX ans
// prenom = "Valentin";
// age = 30;
// console.log(`Mon voisin s'appelle ${prenom}, il a ${age} ans`);

// /*******************************
//  * Les opérateurs arithmétiques
//  */
// let nb1 = 10,
//   nb2 = 5,
//   resultat;

// // L'addition
// resultat = nb1 + nb2;
// console.log(resultat);

// // La soustraction
// resultat = nb1 - nb2;
// console.log(resultat);

// // La multiplication
// resultat = nb1 * nb2;
// console.log(resultat);

// // La division
// resultat = nb1 / nb2;
// console.log(resultat);

// // Le modulo --> reste de la division
// resultat = nb1 % nb2;
// console.log(resultat);

// // Augmenter une valeur
// nb1 = nb1 + 5;
// console.log(nb1);
// // on peut simplifier :
// nb1 += 5;

// /*************************************
//  * Incrémentation et décrémentation
//  */
// // Incrémentation
// nb1 = nb1 + 1;
// // peut etre simplifier :
// nb1 += 1;
// // mais encore mieux :
// nb1++;

// // Décrementation
// nb1 = nb1 - 1;
// nb1 -= 1;
// nb1--;

// nb1 = 1;
// console.log("nb1 = " + nb1);
// console.log(nb1++); // affiche la valeur de nb1 avant incrémentation
// console.log("nb1 = " + nb1);

// nb1 = 1;
// console.log("nb1 = " + nb1);
// console.log(++nb1); // effectue l'incrémentation puis affiche la valeur de nb1
// console.log("nb1 = " + nb1);

// /****************************
//  * Les tableaux (numériques)
//  */
// // Déclaration d'un tableau numérique (2 façons de faire)
// let monTableau = [];
// let monTableau2 = new Array();

// // Affecter des valeurs à un tableau numérique
// monTableau[0] = "Pomme"; // on affecte une valeur à la case en position 0 du tableau
// monTableau[1] = "Poire";

// // Afficher le contenu du tableau numérique
// console.table(monTableau);
// console.log(monTableau[0]);
// console.log(monTableau[1]);

// // Déclarer et affecter en même temps un tableau numérique
// let legumes = ["Carotte", "Chou", "Navet"];
// let legumes2 = new Array("Carotte", "Chou", "Navet");

// // Réaffecter une valeur à une case d'un tableau numérique
// console.log(legumes[2]);
// legumes[2] = "Tomate";
// console.log(legumes[2]);

// // mini exo : Remplacer la carotte par Pomme de terre
// console.log(legumes[0]);
// legumes[0] = "Pomme de terre";
// console.log(legumes[0]);

// // Récupérer la taille d'un tableau
// console.log(legumes.length);

// // Ajouter un élément au tableau
// legumes.push("Poireau"); // Ajoute 1 élément
// legumes.push("Courgette", "Potiron", "Aubergine");

// console.table(legumes);

// // Rétirer un élément du tableau
// // La méthode pop() va nous permettre de retirer le dernier élément d'un tableau
// legumes.pop(); // Retire l'aubergine

// // La méthode shift() va nous permettre de retirer le premier élément d'un tableau
// legumes.shift(); // Retire la pomme de terre

// // Ajouter un élement en première position :  unshift()
// legumes.unshift("Endive");

// console.table(legumes);

// // La méthode splice() va nous permettre de retirer un ou plusieurs éléments d'un tableau à une position donnée
// // tableau.splice(positionDeDemarrage, nbASupprimer);
// legumes.splice(2, 2);

// console.table(legumes);

// // Nous pouvons aussi ajouter des éléments à une position donnée avec la méthode splice()
// legumes.splice(1, 0, "Cornichon");

// console.table(legumes);

// /**********************************
//  * Exercice Burger :
//  * on créer un Burger classique
//  * let burger = ["Pain", "Salade", "Cornichon", "Cheddar", "Steak", "Tomate", "Moutarde", "Ketchup"]
//  * 1. Créer et Afficher ce Burger
//  * 2. Enlever les ingrédient pour une version Végétarienne, remplacer le steak par un steak Végétal
//  * 3. faire une version végan (ils n'aiment pas les produits d'origine animal)
//  * 4. faire une version Carnivore supplémnent 4 steaks
//  * 5. Inventez votre formule Personnalisé
//  */

// /***************************
//  * Objets
//  */

// // let personne = {
// //   nom: "WILS",
// //   prenom: "David",
// //   age: 35,
// // };

// // console.log(personne);
// // console.log(personne.prenom);

// // personne.prenom = "John";
// // console.log(personne);

// // personne.voiture = "Skoda";
// // console.log(personne);

// /**************************
//  * Exercice : créez une voiture avec une marque, un modèle, une couleur, un prix
//  * 1. Afficher la voiture
//  * 2. Changer sa couleur en noir ou blanc (selon la couleur d'origine de votre voiture)
//  * 3. Changer le prix (réduction de 25%)
//  * 4. Ajouter un propriétaire (juste son prénom)
//  */

// /**
//  * Garage
//  * vous avez fait une voiture, maintenant faites en 3 nouvelles voitures et intégrez les dans un tableau que s'appelle : garage
//  */

// /**************************************
//  * Afficher une alerte à l'utilisateur
//  */
// //alert("Coucou toi !");

// /**************************************
//  * Demander une saisie à l'utilisateur
//  */
// // prenom = prompt("Quel est ton prénom ?");
// // console.log(prenom);
// // Attention si la valeur saisie n'est pas stockée dans une variable, la valeur est perdue...

// /**
//  * Demander le prénom  et l'age de l'utilisateur et afficher une alert "Bonjour Bob vous avez XX ans"
//  */

// // prenom = prompt("Quel est ton prénom ?");
// // age = prompt("Quel est ton age ?");
// // alert(`Bonjour ${prenom} vous avez ${age} ans`);

// /*************************************
//  * Les fonctions
//  */
// // Lorsque les parenthèses d'une fonction sont vides cela signifie qu'elle ne prend pas de paramètre

// // function hello() {
// //   alert("Hello World !");
// // }

// // // hello();

// // function bonjour(prenom) {
// //   alert("Bonjour " + prenom);
// // }

// // bonjour("Patrick");

// /*
// Exercice
// 1/ Ecrire une fonction permettant d'effectuer le calcul du perimetre d'un rectangle
// Indice : l'équivalent de l'instruction Retourner vue en Algo est l'instruction return en JS

// 2/ Demander à l'utilisateur de saisir la longueur et la largeur

// 3/ Appeler la fonction précédemment créée avec les valeurs saisies par l'utilisateur

// 4/ Afficher le résultat dans la console
// */

// // let longueur = Number(prompt("quel est la longueur ?"));

// // // let perimetre = (largeur,longueur) => { return 2*(longueur + largeur) }
// // function perimetre(largeur, longueur) {
// //   return 2 * (longueur + largeur);
// // }
// // alert("le perimetre est de " + perimetre(20, 10));

// /**
//  * Exercice commande MacDo
//  * Simuler une commande au drive :
//  *
//  * on réutilisera les burgers qui vous avez fait précédemment
//  * 1. écrire une fonction qui demande :
//  *          - type de Burger
//  *          - accompagnement : Frite, Onion ring, batonnets de carottes
//  *          - boissons : Coca, Fanta, Minute Maid ou Evian
//  *          - Dessert : McFurry, Sundae, Donut ...
//  *
//  * 2. Stocker le tout dans un tableau et Afficher le résultat
//  */

// // function drive() {
// //   alert(`Bonjour et bienvenue chez MacDo`);
// //   burger = prompt(`Quel hamburger desirez-vous ?`);
// //   let accompagnement = prompt(`Frites ,Potatoes,Carottes ?`);
// //   let boissons = prompt(`Vous desirez une boisson ?`);
// //   let dessert = prompt(`Une petite douçeur pour faire passer le tout ?`);
// //   let commande = [burger, accompagnement, boissons, dessert];
// //   console.log(
// //     `Votre commande se compose de ${commande} et feras 15.00€ au prochain guichet.Merci !`
// //   );
// // }
// // drive();

// /****
//  * Gestionnaire de contact :
//  * - faire une fonction qui permet d'ajouter un contact dans un tableau de contact
//  * vous allez demander un numero de telephone, et le nom et prenom de votre contact
//  *
//  * A Chaque fin de saisie, affichez le tableau de contact en console.log()
//  * */

// // let fiche = [];
// // function contact() {
// //   let renseignement = {
// //     numero: "",
// //     prenom: "",
// //     nom: "",
// //   };
// //   alert(`Bonjour, veuillez renseigner vos informations s'il vous plait`);

// //   renseignement.numero = prompt(`Votre numéro de téléphone`);
// //   renseignement.nom = prompt(`Votre nom`);
// //   renseignement.prenom = prompt(`Votre prénom`);
// //   fiche.push(renseignement);
// // }
// // contact();
// // contact();
// // console.log(fiche);

// // /** Soltion Optimisée : créer une fonction readInfo qui renvoie le résultat d'un prompt */

// // fiche = [];
// // function readInfo(info) {
// //   return prompt(`donnez moi votre ${info}`);
// // }
// // function contact() {
// //   let renseignement = {
// //     numero: "",
// //     prenom: "",
// //     nom: "",
// //   };
// //   alert(`Bonjour, veuillez renseigner vos informations s'il vous plait`);

// //   renseignement.numero = readInfo(`numéro de téléphone`);
// //   renseignement.prenom = readInfo(`nom`);
// //   renseignement.nom = readInfo(`prénom`);
// //   fiche.push(renseignement);
// // }
// // contact();
// // console.log(fiche);

// /*****************************
//  * Les conditions
//  *
//  * En algo une condition s'écrit :
//  *
//  * Si (condition) alors
//  *  instructions
//  * FinSi
//  *
//  * En JS :
//  *
//  * if(condition) {
//  *  instructions
//  * }
//  */
// // age = Number(readInfo("age"));

// // if (age >= 18) {
// //   alert("Bienvenue sur notre site, tu es majeur !");
// // } else {
// //   alert("Tu n'es pas majeur ! Tchao !");

// //   // Redirection vers Google
// //   window.location = "http://google.fr";
// // }

// /**********************************
//  * Les opérateurs de comparaison
//  *
//  *      == signifie égal à
//  *      Il permet de vérifier que la valeur de deux variables sont identiques
//  *
//  *      === signifie strictement égal à
//  *      Il va comparer la valeur ET le type de deux variables
//  *
//  *      != signifie différent de
//  *      Il permet de vérifier que la valeur de deux variables sont différentes
//  *
//  *      !== signifie strictement différent de
//  *      Il va vérifier si la valeur OU le type sont différents
//  *
//  * Exemples
//  *
//  * 1 == 1 --> vrai
//  * "1" == 1 --> vrai
//  * 1 != 2 --> vrai
//  * 1 != "1" --> faux
//  * 3 === 3 --> vrai
//  * 3 === "3" --> faux
//  * 3 !== "3" --> vrai
//  * 4 !== 3 --> vrai
//  *
//  * * Exercice
//  *
//  * Nous disposons de deux variables email et mdp contenant respectivement l'email et le mot de passe pour accéder à un espace sécurisé
//  */
// // let email = "contact@teamcalais.fr";
// // let mdp = "leLundiAuSoleil";

// /**
//  * 1/ Demander à l'utilisateur de saisir un email et un mot de passe
//  * 2/ Vérifier que l'email est identique à la variable email
//  * 3/ Vérifier que le mot de passe est identique à la variable mdp
//  * 4/ Si OK alors on affiche un message de bienvenue
//  * 5/ Sinon on indique à l'utilisateur l'information incorrecte
//  */

// // 1
// // let userEmail = prompt("Saisir votre email");
// // let userPwd = prompt("Saisir votre mot de passe");

// // // 2
// // if(userEmail == email) {
// //     // 3
// //     if(userPwd == mdp) {
// //         // 4
// //         alert("Bienvenue sur notre espace sécurisé");
// //     } else {
// //         // 5
// //         alert("Mot de passe incorrect");
// //     }
// // } else {
// //     alert("Email non reconnu");
// // }

// /**
//  * Exercice petit Quizz : demandez 2 questions à l'utilisateur :
//  * Si la première réponse est fausse ==> Perdu
//  * Puis Si la deuxième réponse est fausse ==> Perdu
//  * Si il a bon aux 2 questions ==> Gagné
//  */
// // let reponse1 = "France";
// // let reponse2 = "Jacques Chirac";

// // let question1 = prompt("Qui a gagné la coupe du monde de football en 1998 ?");
// // if (question1 === reponse1) {
// //   let question2 = prompt("Quel président était en exercice à ce moment là ?");
// //   if (question2 === reponse2) {
// //     alert("Gagné");
// //   } else {
// //     alert("Perdu");
// //   }
// // } else {
// //   alert("Perdu");
// // }

// /********************************
//  * Les opérateurs logiques
//  *
//  * L'opérateur ET : &&
//  *
//  * Exemple : Tester en même temps si l'email ET le mot de passe sont identiques
//  */
// // if (userEmail == email && userPwd == mdp) {
//   // La condition sera remplie si et seulement si les deux tests donnent la valeur VRAI
//   // Cf table de vérité
// // }

// // question1 = prompt("Qui a gagné la coupe du monde de football en 1998 ?");
// // question2 = prompt("Quel président était en exercice à ce moment là ?");

// // if (question1 === reponse1 && question2 === reponse2) {
// //   alert("Gagné");
// // } else {
// //   alert("Perdu");
// // }

// /***************************
//  * L'opérateur OU : ||
//  *
//  * Exemple : Tester si un nombre est inférieur à 1 OU supérieur à 3
//  */
// // let nb = 5;
// // if (nb < 1 || nb > 3) {
// //   console.log("Le nombre n'est pas compris entre 1 et 3");
//   // La condition sera remplie si l'une des deux conditions est vraie
//   // Cf table de vérité
// }

// /****************************
//  * L'opérateur NON / CONTRAIRE DE : !
//  */
// // let pause = true;
// // if (!pause) {
// //   console.log("Ce n'est pas l'heure de la pause !");
// // }
// // équivalent à if(pause == false) { ... }
// // différent de
// // if (pause) {
// //   console.log("C'est l'heure de la pause !");
// // }
// // équivalent à if(pause == true) { ... }

// /*********************************
//  * Les boucles
//  */

// // La boucle TANT QUE : WHILE
// // let i = 1;
// // while (i <= 10) {
// //     console.log("Instruction while exécutée " + i + " fois");
// //     i++;
// // }

// // let pont = "Ouvert"

// // while (pont == "Ouvert") {
// //   console.log("feu rouge");
// //   pont = "Fermé";
// // }

// /**
//  * Demander à l'utilisateur de Fermer le pont dans la boucle, une fois le pont Fermer répondez : feu orange clignotant
//  */

// // while (pont == "Ouvert") {
// //   console.log("feu rouge");
// //   let fermerPont = prompt("voulez-vous fermer le pont ?");
// //   if(fermerPont.toUpperCase() === "OUI"){
// //     pont = "Fermé";
// //     console.log("feu orange clignotant");
// //   }
// // }

// /*
//  * Vous avez une punition à faire : "Je dois participer plus en classe" à faire 100 fois
//  */

// // let punition = "Je dois participer plus en classe"

// // i = 0
// // while (i < 100) {
// //   console.log(punition);
// //   i++;
// // }

// // La boucle FAIRE ... TANT QUE : do...while
// // do {
// //   // A la différence de la boucle while les instructions d'un do while seront éxécutées au moins une fois
// //   console.log("Instruction do while exécutée " + i + " fois");
// //   i++;
// // } while (i <= 10);

// // La boucle POUR : FOR
// // for (let i = 1; i <= 10; i++) {
// //   console.log("Instruction for exécutée " + i + " fois");
// // }

// /**
//  * Exercice
//  * A partir du tableau numérique suivant :
//  */
// // let names = ["Jérome", "Valentin", "Yohann", "Emmanuel", "Marina"];
// /**
//  * Gràce à une boucle FOR, afficher la liste des prenoms du tableau*/

// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// /****************
//  * const
//  */
const nbMax = 6;
//  nbMax = 7;

const fruits = ["Pomme"];
// fruits = ["Pomme", "Poire"]; // Syntax error
fruits.push("Poire"); // Possible car on ne "touche" pas à la structure de la constante à savoir un tableau numérique

/*****************
 * .map
 * .find
 * .filter
 */
//  const vegetables = [
//   {
//       code: 11,
//       name: "Carotte",
//       price: 1.99
//   },
//   {
//       code: 12,
//       name: "Poivron vert",
//       price: 2.99
//   },
//   {
//       code: 13,
//       name: "Poivron rouge",
//       price: 2.99
//   },
//   {
//       code: 14,
//       name: "Chou",
//       price: 3.99
//   }
// ];

// // .map
// const listVegetables = vegetables.map(function(vegetable) {
//   return vegetable.name + ", " + vegetable.price +" euros";
// });
// console.log(listVegetables);

// // Trouver un élément --> .find
// const carotte = vegetables.find(function(vegetable) {
//   return vegetable.name.includes("Carotte");
// });
// console.log(carotte);

// // Trouver tous les éléments --> .filter
// const poivrons = vegetables.filter(function(vegetable) {
//   return vegetable.name.includes("Poivron");
// });
// console.log(poivrons);

const dwwmCalais = [
  {
    prenom: "Allan",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Dalian",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Marina",
    lunettes: true,
    sexe: "F",
  },
  {
    prenom: "Emmanuel",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "Yohann",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Jerome",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Valentin",
    lunettes: false,
    sexe: "M",
  },
  {
    prenom: "Thierry",
    lunettes: true,
    sexe: "M",
  },
  {
    prenom: "François",
    lunettes: true,
    sexe: "M",
  },
];

// 1. Affichez les prenoms
// 2. Trouver la personne de sexe Feminin
// 3. filtrer les personnes possédant des lunettes
// 4. Filtrer les personne qui possède "MA" dans leur prenom
// 5. idem avec "AL"

// 1.
const prenomsStagiaires = dwwmCalais.map(function (student) {
  return student.prenom;
});

console.log(prenomsStagiaires);

//2
const feminin = dwwmCalais.find(function (student) {
  return student.sexe == "F";
});

console.log(feminin);

//3
const lunettes = dwwmCalais.filter(function (student) {
  return student.lunettes === true;
});

console.log(lunettes);

//4
const prenomMA = dwwmCalais.filter(function (student) {
  return student.prenom.toUpperCase().includes("MA");
});

console.log(prenomMA);

//5
const prenomAL = dwwmCalais.filter(function (student) {
  return student.prenom.toUpperCase().includes("AL");
});

console.log(prenomAL);

/***********************
 * Fonctions fléchées --> Arrow function
 * Pour écrire une fonction fléchée nous allons utiliser un opérateur que l'on appelle fat arrow =>
 */
function addition(nb1, nb2) {
  return nb1 + nb2;
}

const addition2 = function (nb1, nb2) {
  return nb1 + nb2;
};

const addition3 = (nb1, nb2) => nb1 + nb2;
const afficherNombre = (nb1) => console.log(nb1);

afficherNombre(addition(2, 3));
afficherNombre(addition2(5, 3));
afficherNombre(addition3(2, 5));

// Ternaire : ?
let clim = false;
if (clim) {
  console.log("Oui");
} else {
  console.log("Non");
}

// // équivalent avec un ternaire à
// clim ? console.log("oui") : console.log("non");

// // Demandez à l'utilisateur son age : si il a moins de 18 ans affichez mineur sinon affichez majeur
// let age = Number(prompt("Quel est votre age ?"));
// age < 18 ? console.log("Mineur") : console.log("Mineur");

// //Créez 2 fonction qui remvoie vers une autre page : la première destiné au mineur : PicWicToys
// //la deuxième à Winamax

// const redirection = (url) => {
//   return window.location = url
// }

// age < 18 ? redirection("https://www.picwictoys.com/") : redirection("https://www.winamax.fr/");

/* Le DOM

  Document Objet Model 
  Jl fournit une représentation du document sous forme d'un arbre et définit la façon dont la structure peut etre manipulée par votre programme (le JS dans notre cas)

  On peut dire qu'il s'aggit d'une sorte de "passerelle" entre le HTML et le JS

  Grace au dom nous allons être en mesure de venir accéder et/ou modifier notre HTML depuis le JS

  Chaque page chargée dans notre navigateur dispose d'un objet "document" utilisable en Js
  Cet objet "document" est notre point d'entrée vers notre contenu HTML

  Comment récupéré les différentes informations de notre HTML ?

  document.getElementById("monId");
Cette méthode va nous permettre de récupérer un élémént HTML à partir de son ID.
Elle prend en paramètre l'ID de l'élement que l'on souhaite récupérer
  
  */

let welcome = document.getElementById("welcome");

console.log(welcome);

/*
  document.getElementsByClassName("maClasse")
  Cette méthode va permettre de récupérer un ou plusieurs élément HTml à partir d'une classe passée en paramètre de la méthode
  */

let data = document.getElementsByClassName("contenu");
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

/**
 * Contrairement à getElementById on recupère un tableau numérique avec nos élééments HTML à intérieur.
 * A noter aussi que même si la classe n'est utilisée que sur un élémént, la méthode retournera malgré tout un tableau.
 *
 */

/*
   * document.getElementsByTagName("nomBalise");
Cette méthode va nous permettre de récupérer un ou plusieurs éléméents HTML à partir de nom de la balise.
   */

let divs = document.getElementsByTagName("div");

console.log(divs);

// Récupéré le lien googleLink
let google = document.getElementById("google");
console.log(google);

/** Nous allons pouvoir accéder aux infos de ce lien à partir de l'élément récuperé */

//où emmène le lien
console.log(google.href);

// l'ID de élément
console.log(google.id);

// contenu de l'élémnt
console.log(google.textContent);

//classe de lélément
console.log(google.className);

/**
 * Comme une variable "classique" on va pouvoir réaffecter une nouvelle valeur à la propriété souhaitée
 */
google.textContent = "Mon lien vers Google";

data[0].innerHTML = "<img src='images/ours.jpg' alt='une image'/>";

/**
 * Ajouter un élémént
 */
// 1) Création de l'élémént (methode create sur l'objet document)

let p = document.createElement("p");
// 2) définir l'élément
p.id = "newParagraphe";
p.textContent = "Mon paragraphe créé en JS :)";

// 3) Ajouter à l'élémnt dans HTML
//  document.body.appendChild(p);  // Pour ajouter l'élément en tant qu'enfant du body (à la fin du document)

// le paragraphe est l'enfant de la 2eme div avec la classe contenu
data[1].appendChild(p);

//p.style.color = "red";

/*
 *Dans un soucis de respect de la séparation des concepts nous éviterons au maximum de manipuler les styles de cette fàçon. En effet nous privilégirons l'utilisation des classes pour ajouter ou supprimer des styles.
 */

// propriété classList
p.classList.add("color-red", "text-uppercase");
console.log(p.classList);

p.classList.remove("text-uppercase"); // Retirer une ou plusieurs classes

/**
 * Les événements
 *
 *
 * Les événements vont nous permettre de déclencher une fonction (une série d'instructions) suite à une intéraction/action de l'utilisateur
 *
 * Notre objectif : Etre en mesure de capter/capturer ces évenemnts, afin d'exectuter une fonction
 *
 * Nous allons trouver plusieurs types d'évenements
 *
 * -les éveneements à la souris
 *       *click --> au clic sur un élément
 *       *mouseenter --> au survol d'un élément
 *       *mouseleave ---> lorsque l'on quitte le survol d'un élément
 *
 * -les événements au clavier
 *       *keydown --> une touche du clavier est enfoncée
 *       *keyup --> une touche de clavier est relachée
 *
 * -les évenements sur la fenêtre
 *       *scroll --> défilement de la fenêtre
 *       *resize --> redimentionnement de la fenêtre
 *
 * - Les événement sur un formulaire
 *       * change ---> auchangement de valeur pour les éléménts <input>,<select>, <textarea>
 *       * submit ---> avant l'envoi du formulaire
 *
 * - Les événement sur le DOM
 *       * DOMContentLoades --> lorsque le document HTML est complèment chargé
 *
 */

/*************************************************************************************************************************************

     Les écouteurs d'éveneemnts

     Nous allons avoir besoin d'"attacher" un événement à un élémént ou autrement dit déclarer un écouteur d'éveneement qui se chargera de lancer une action lorsque l'évenemnt se produira --> cette action sera une fonction (cette fonction sera à l'intérieur d'une autre fonction et noux appellerons donc cette fonction une fonction callback)
     *
     *
     * La fonction que nous allons utiliser pour déclarer un écouteur d'evement est addEventListener
     * 
     * elmeent.addEventListener("type d'évenemnt", fonction de callback ou nom d'une fonction existante)
     * 
     * Exemple : AU clic sur le paragraphe portant d'id welcome, afficher le textez en jaune
     * 
     * 1/ Onrécupère l'élément sur lequel nous allons attacher l'écouteur d'éveneement dans l'étape 3
     */
let bienvenue = document.getElementById("welcome");

//2/ On détermine une fonction en mesure de réaliser l'action demandée

bienvenue.textContent = "Bienvenue sur notre site";

function changeColor() {
  if (bienvenue.style.color == "gold") {
    bienvenue.style.color = "black";
  } else {
    bienvenue.style.color = "gold";
  }
}

bienvenue.addEventListener("click", changeColor);

// Posssible de passer directement par une fonction de CallBack

bienvenue.addEventListener("click", () => {
  if (bienvenue.style.color == "gold") {
    bienvenue.style.color = "black";
  } else {
    bienvenue.style.color = "gold";
  }
});

/**
 * Exercice
 *
 * En JS uniquement
 * 1/ créer un champ input
 * ajouter un type text à ce champ
 * ajouter id à ce champ (ex: monInput)
 * ajouer le champ au document HTML
 * ajouter dans une alerte la saisie de l'utilisateur dès que quelquechose est saisie
 *
 */
let input = document.createElement("input");
input.type = "text";
input.id = "monInput";
document.body.appendChild(input);
input.addEventListener("change", () => {
  alert(input.value);
});

/**
 * querySelector
 *
 * Cette méthode, toujours sur l'objet document, retourne le premier élément dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
 */
let element = document.querySelector(".contenu");
console.log(element);

/*Cette méthode, toujours sur l'objet document, retourne tous éléments dans le document HTML correspondant au sélecteur spécifié ou null si aucune correspondance n'est trouvée.
 */
let elements = document.querySelectorAll(".contenu");

console.log(elements);

/**
 * La méthode preventDefault sur l'objet event
 *
 * Elle va nous permettre d'indiquer que nous ne souhaitons pas que l'action par défaut soit prise en compte.
 *
 *
 * La fonction de callback passée en paramètre d'addEvenlistener peut prendre un paramètre.
 * Ce paramètre représente l'objet event.
 * il est généralement nommé e, evt ou event
 *
 * La methode preventDefault de cet odjet récupéré en paramètre permet d'empêcher le navigateur de déclencher son comportement par défaut.
 *
 * Exemple: empêcher l'utilisateur d'aller sur Google au clic sur le lien portant l'id google
 */

let googleLink = document.querySelector("#google");
googleLink.addEventListener("click", (e) => {
  // annuler le comportement par défaut
  e.preventDefault();

  alert("VOUS NE PASSSEREZ PAS !");

  console.log(e.target);
  console.log(e.target.classList);
});
