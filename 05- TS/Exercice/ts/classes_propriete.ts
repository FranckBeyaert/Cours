// * Création de classe et utilisation du mot clé this
// * Modificateur d'accés
// * read only
// * Héritage
// * Overriding & Protected

class Departement
{
    // ! Présente des problèmes de sécurité : les valeurs des attributs peuvent 
    // ! être modifiésà tout moment sans passer par des méthodes ex : addEmployee()
    // public nom : string;
    // public employes: string[] = [];

    private readonly id: string;
    private nom:string;
    protected employes:string[] = [];

    constructor(n:string, id: string)
    {
        this.nom = n;
        this.id = id;
    }

    decrire(this:Departement)
    {
        console.log(`Departement :   ${this.nom}`);
    }

    addEmployee(employe: string): void
    {
        if(employe == "David")
        {
            return;
        }
        this.employes.push(employe);
    }

    printInfoEmp()
    {
        console.log(this.employes.length);
        console.log(this.employes);
    }
}

class ItDepartment extends Departement
{
    admins: string[];
    
    constructor(id: string, admins:string[])
    {
        super(id, "IT");
        this.admins = admins;
    }
}

class EcoDepartment extends Departement
{
    private LastFile: string;

    get RecentFile()
    {
        if(this.LastFile)
        {
            return this.LastFile;
        }
        throw new Error("NO FILE");
    }

    set RecentFile(value: string)
    {
        if(!value)
        {
            throw new Error("Need correct value");
        }
        this.addFiles(value);
    }

    constructor(id: string, private ecoFiles: string[])
    {
        super(id, "ECO");
        this.LastFile = ecoFiles[- 1];
    }

    addFiles(text: string)
    {
        this.ecoFiles.push(text);
    }

    printFiles()
    {
        console.log(this.ecoFiles);
    }
}

const comptabilite = new Departement("COMPTA","Comptabilité");
comptabilite.decrire();

// const copyCompta = {nom: "Copy", decrire: comptabilite.decrire};
// copyCompta.decrire();

comptabilite.addEmployee("David");
comptabilite.addEmployee("Alain");

// comptabilite.employes[2] = "Jean";

// comptabilite.nom = "Nouveau nom";
comptabilite.decrire();
comptabilite.printInfoEmp();

const it = new ItDepartment("IT1",["Vince"]);
it.addEmployee("Fab");
it.addEmployee("Max");
it.decrire();
it.printInfoEmp();

console.log(it);

const eco2: EcoDepartment = new EcoDepartment('Compta2', []);
const ecoFiles = "Chiffre d'affaires: 2 000 000 €";
eco2.addFiles(ecoFiles);
eco2.printFiles();
eco2.addEmployee("Alain");
eco2.addEmployee("José");

console.log(eco2);
