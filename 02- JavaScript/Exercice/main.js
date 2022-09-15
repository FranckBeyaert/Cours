let prenom = "Franck";
let nom = "Beyaert";
let age = "25";

let phrase =`Bonjour je m'appelle ${prenom} ${nom}, j'ai ${age} ans`;
console.log(phrase);

// * Modif variable age avant écriture
phrase =`L'année prochaine, j'aurais ${age} ans`;
console.log(phrase);

// * Utilisation de l'objet
let voisin =
{
    prenom : "Maxime",
    nom : "Debav",
    age : "26"
};
let propertyAccess = "age";
let VoisinAge = voisin[propertyAccess];
phrase = `Mon voisin s'appelle ${voisin.nom} ${voisin.prenom}, et il a ${voisin.age} ans`;

// * Bracket notation + notation Pointée 
let phrase2 = `Mon voisin s'appelle ${voisin["nom"]} ${voisin.prenom}, et il a ${VoisinAge} ans`;
console.log(phrase);
console.log(phrase2);

// * Utilisation de la concaténation
let nomcomplet = prenom + " " + nom;
phrase = `Bonjour je m'appelle ${nomcomplet}`;
console.log(phrase);

// * Création d'une class
class Person
{
    constructor(prenom, nom, age, lunettes)
    {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.lunettes = lunettes;
    }
}

let myPerson = new Person("Fabrice", "Patisso", 26, false);

console.log(myPerson);

// * Création d'un Array
let guests = ["Franck", "Alexandre", "Hervé", "Maxime"]
console.log(guests);
guests.push("Vincent"); //Ajout en fin d'array
guests.unshift("Amy"); //Ajout en début d'array
console.log(guests, guests.length);
guests.pop();//Suppression en fin d'array
console.log(guests);
guests.shift();//Suppression en début d'array
console.log(guests);

// * Réaliser d'un feu tricolore avec if / else if

let feu = "vert";

if(feu =="vert")
{
    console.log("Passe");
}
else if(feu =="orange")
{
    console.log("Ralentir");
}
else if(feu="rouge")
{
    console.log("Stop");
}
else if(feu ="Orange Clignotant")
{
    console.log("En panne");
}


// * Exo Opérateurs Logiques

class Client
{
    constructor(genre, age)
    {
        this.genre = genre;
        this.age = age;
    }

    ReductPrix(prix)
    {
        if(this.genre=="femme" && this.age<25)
        {
            prix -= prix * 20/100;
            
        }
        else if (this.genre=="femme" && this.age>25)
        {
            prix -= prix * 25/100;
            
        }
        else if (this.genre=="homme" && this.age>50)
        {
            prix -= prix * 25/100;
            
        }
        else if (this.age<18)
        {
            prix -= prix * this.age/100;
            
        }
        // !NE PAS OUBLIER LE RETURN
        return prix;
    }
    
}

let prix = 100;
let clients =
[
    new Client("femme",10),
    new Client("homme",15),
    new Client("femme",22),
    new Client("homme",51),
    new Client("femme",80)
];

for (let i = 0; i< clients.length; i++)
{
    console.log(clients[i].ReductPrix(prix));
    
}

// * Exercice boucles
    // * FOR

for (let i =0; i < guests.length; i++)
{
    console.log("Bonjour à " + guests[i]);
}

// * Test function
function soustraction(a,b)
{
    return a - b;
}

console.log(soustraction(10, 15));

// * Test functions fléchéés
let div = (a, b) => a / b ;
let add = (a, b) => a * b ;
console.log(add(10, 15), div(100, 2));

// * Exercice calculer une moyenne

let nbr = [10, 12 ,14 ,16]
function moy(nbr)
{
    res = 0;
    for(let i = 0; i < nbr.length; i++)
    {
        res += nbr[i];
    }
    res /= nbr.length;
    return res;
}
console.log(moy(nbr));


// * Calculette

class Calculette
{
    static add = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static mult = (a, b) => a * b;
    static div = (a, b) => a / b;
    static moy(nbr)
    {
        res = 0;
        for(let i = 0; i < nbr.length; i++)
        {
            res += nbr[i];
        }
        res /= nbr.length;
        return res;
    }
}
console.log(Calculette.add(10, 2));
console.log(Calculette.sub(10, 2));
console.log(Calculette.mult(10,2));
console.log(Calculette.div(10, 2));
console.log(Calculette.moy([10, 2]));
