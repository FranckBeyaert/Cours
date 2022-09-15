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


// * Recherche sur .map / .filter / .find / .reduce / .slice
    // * MAP
    /*
    La méthode map() crée un nouveau tableau avec les résultats 
    de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    */
    const array1 = [1, 4, 9, 16];
    // passe une function à map
    const map1 = array1.map(x => x * 2);
    console.log(map1);
    // résultat: Array [2, 8, 18, 32]

    // * FILTER
    /*
    La méthode filter() crée et retourne un nouveau tableau 
    contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée 
    par la fonction callback.
    */
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
    // résultat: Array ["exuberant", "destruction", "present"]

    // * FIND
    /*
    La méthode find() renvoie la valeur du premier élément trouvé dans le tableau 
    qui respecte la condition donnée par la fonction de test passée en argument. 
    Sinon, la valeur undefined est renvoyée.
    */
    const array2 = [5, 12, 8, 130, 44];
    const found = array2.find(element => element > 10);
    console.log(found);
    // résultat: 12

    // * REDUCE
    /*
    La méthode reduce() applique une fonction qui est un « accumulateur » 
    et qui traite chaque valeur d'une liste (de la gauche vers la droite) 
    afin de la réduire à une seule valeur.
    */ 
    const array3 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array3.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    console.log(sumWithInitial);
    // expected output: 10

    // * SLICE
        /*
        La méthode slice() renvoie un objet tableau, 
        contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, 
        la portion est définie par un indice de début et un indice de fin (exclus). 
        Le tableau original ne sera pas modifié.
        */
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]
    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]
    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]
    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]
    console.log(animals.slice());
    // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

    //TODO: Créer son burger végétarien(pas de viande), vegan(pas de produit animal), 
    //TODO: Créer son burger carnivore(pas de legumes), personnaliser(as u want)
    //TODO: Faire un systeme de commande de burger à la demande(prompt())
    const burger = 
    [
        "pain", 
        "cheddar", 
        "steak", 
        "ketchup",
        "cornichon", 
        "salade", 
        "tomate", 
        "oignon"
    ];

    // * Burger Végétarien
    const vegetarian = burger.filter(x => x != "steak");

    // * Burger Vegan
    const vegan = burger.filter(x => x != "cheddar" && x != "steak");
    
    // * Burger Carnivore
    const carnivore = burger.slice(0,4);
    
    // * Burger Personnaliser
    const perso = [burger[0],burger[1],burger[2],burger[1],burger[2], burger[3], burger[5], burger[6]];
    console.log(perso);

    // * System de commande
    let cmd = "Choisisssez un burger : ";
    cmd += "1. Vegetarien";
    cmd += " 2. Vegan";
    cmd += " 3. Carnivore";
    cmd += " 4. Personnaliser";

    let value = parseInt(window.prompt(cmd));
    switch(value)
    {
        case 1 : 
            console.log("Vegetarien" + vegetarian)
            break;
        case 2 :
            console.log("Vegan" + vegan)
            break;
        case 3 :
            console.log("Carnivore" + carnivore)
            break;
        case 4 :
            console.log("Personnaliser" + personnaliser)
            break;                
    }

