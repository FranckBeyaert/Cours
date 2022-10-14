// Création de classe et utilisation du mot clé this
// Modificateur d'accès
// read-only
// héritage
// overriding et protected
// getters et setters

class Departement {
    // présente des problemes de sécurité : les valeurs des attributs peuvent etre modifier à tout moment sans passer par des méthodes ex : ajouterEmploye()
    // public nom: string;
    // public employes: string[] = [];
    private readonly id : string;
    private nom: string;
    protected employes: string[] = [];

    constructor(id: string, n: string){
        this.id = id;
        this.nom = n;
    }

    decrire(this: Departement){
        console.log(`Departement :  ${this.nom}`);
    }

    ajouterEmploye(employe: string){
        // this.id = "D1";
        this.employes.push(employe);
    }

    imprimerInformationEmploye(){
        console.log(this.employes.length);
        console.log(this.employes);
    }
}

class DepartementIT extends Departement{
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, "IT");
        this.admins = admins;
    }
}

class DepartementCompta extends Departement{

    private dernierFichier : string;

    get fichierRecent(){
        if(this.dernierFichier){
            return this.dernierFichier
        }
        throw new Error(" Fichier inexistant ");
    }

    set fichierRecent(value: string){
        if (!value) {
            throw new Error("Passez une valeur correcte !");
        }
        this.dernierFichier = value;
        this.ajouterFichier(value);
    }

    constructor(id: string, private fichiersCompta: string[]){
        super(id, "Comptabilité");
        this.dernierFichier = "Rapport trimest";
    }

    ajouterEmploye(employe: string): void {
        if(employe == "David"){
            return;
        }
        this.employes.push(employe);
    }

    ajouterFichier(text: string){
        this.fichiersCompta.push(text);
    }

    imprimerFichiers(){
        console.log(this.fichiersCompta);
    }
}

const comptabilite = new Departement("COMPTA","Comptabilité");

comptabilite.decrire();

// const copyCompta = { nom: "Copy", decrire: comptabilite.decrire };

// copyCompta.decrire();

comptabilite.ajouterEmploye("David");
comptabilite.ajouterEmploye("Alain");

//comptabilite.employes[2] = "Jean";

//comptabilite.nom = "Nouveau Nom";
comptabilite.decrire();
comptabilite.imprimerInformationEmploye();

const it : DepartementIT = new DepartementIT("IT1", ["Alex"]);

it.ajouterEmploye('Florian');
it.ajouterEmploye('Jeremy');


it.decrire();
it.imprimerInformationEmploye();

console.log(it);

const compta2 = new DepartementCompta("COMPTA2", []);

const fichierCompta = "Chiffre d'Affaire : 2 000 000 €";
compta2.ajouterFichier(fichierCompta);

compta2.imprimerFichiers();

compta2.ajouterEmploye("David");
compta2.ajouterEmploye("José");

compta2.imprimerInformationEmploye();

// console.log(compta2.fichierRecent);

compta2.fichierRecent = "TY";

console.log(compta2.fichierRecent);




