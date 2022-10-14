"use strict";
class Departement {
    constructor(id, n) {
        this.employes = [];
        this.id = id;
        this.nom = n;
    }
    decrire() {
        console.log(`Departement :  ${this.nom}`);
    }
    ajouterEmploye(employe) {
        this.employes.push(employe);
    }
    imprimerInformationEmploye() {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}
class DepartementIT extends Departement {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class DepartementCompta extends Departement {
    constructor(id, fichiersCompta) {
        super(id, "Comptabilité");
        this.fichiersCompta = fichiersCompta;
        this.dernierFichier = "Rapport trimest";
    }
    get fichierRecent() {
        if (this.dernierFichier) {
            return this.dernierFichier;
        }
        throw new Error(" Fichier inexistant ");
    }
    set fichierRecent(value) {
        if (!value) {
            throw new Error("Passez une valeur correcte !");
        }
        this.dernierFichier = value;
        this.ajouterFichier(value);
    }
    ajouterEmploye(employe) {
        if (employe == "David") {
            return;
        }
        this.employes.push(employe);
    }
    ajouterFichier(text) {
        this.fichiersCompta.push(text);
    }
    imprimerFichiers() {
        console.log(this.fichiersCompta);
    }
}
const comptabilite = new Departement("COMPTA", "Comptabilité");
comptabilite.decrire();
comptabilite.ajouterEmploye("David");
comptabilite.ajouterEmploye("Alain");
comptabilite.decrire();
comptabilite.imprimerInformationEmploye();
const it = new DepartementIT("IT1", ["Alex"]);
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
compta2.fichierRecent = "TY";
console.log(compta2.fichierRecent);
