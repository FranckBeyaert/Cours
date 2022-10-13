"use strict";
// * Création de classe et utilisation du mot clé this
// * Modificateur d'accés
// * read only
// * Héritage
// * Overriding & Protected
class Departement {
    constructor(n, id) {
        this.employes = [];
        this.nom = n;
        this.id = id;
    }
    decrire() {
        console.log(`Departement :   ${this.nom}`);
    }
    addEmployee(employe) {
        if (employe == "David") {
            return;
        }
        this.employes.push(employe);
    }
    printInfoEmp() {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}
class ItDepartment extends Departement {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class EcoDepartment extends Departement {
    constructor(id, ecoFiles) {
        super(id, "ECO");
        this.ecoFiles = ecoFiles;
        this.LastFile = ecoFiles[-1];
    }
    get RecentFile() {
        if (this.LastFile) {
            return this.LastFile;
        }
        throw new Error("NO FILE");
    }
    set RecentFile(value) {
        if (!value) {
            throw new Error("Need correct value");
        }
        this.addFiles(value);
    }
    addFiles(text) {
        this.ecoFiles.push(text);
    }
    printFiles() {
        console.log(this.ecoFiles);
    }
}
const comptabilite = new Departement("COMPTA", "Comptabilité");
comptabilite.decrire();
// const copyCompta = {nom: "Copy", decrire: comptabilite.decrire};
// copyCompta.decrire();
comptabilite.addEmployee("David");
comptabilite.addEmployee("Alain");
// comptabilite.employes[2] = "Jean";
// comptabilite.nom = "Nouveau nom";
comptabilite.decrire();
comptabilite.printInfoEmp();
const it = new ItDepartment("IT1", ["Vince"]);
it.addEmployee("Fab");
it.addEmployee("Max");
it.decrire();
it.printInfoEmp();
console.log(it);
const eco2 = new EcoDepartment('Compta2', []);
const ecoFiles = "Chiffre d'affaires: 2 000 000 €";
eco2.addFiles(ecoFiles);
eco2.printFiles();
eco2.addEmployee("Alain");
eco2.addEmployee("José");
console.log(eco2);
