abstract class Person
{
    name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    display(): void
    {
        console.log(this.name);
    }

    abstract find(name: string): Person;
}

class Employee extends Person{
    empCode: number;

    constructor(name: string, code: number)
    {
        super(name);
        this.empCode = code;
    }

    find(name: string): Person
    {
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display();

let emp2: Person = emp.find("Steve");
console.log(emp2);

enum VType
{
    Auto,
    Camion,
    Moto
}

abstract class Vehicule
{
    abstract nbRoues: number;
    abstract poid: number;
    abstract vTransport: number;
    abstract marque: string;
    abstract type: VType;
    

    abstract BruitMoteur():void;
    abstract AfficherVolumeTransportable():void;
}

class voiture implements Vehicule
{
    nbRoues: number;
    poid: number;
    vTransport: number;
    marque: string;
    type: VType;    

    constructor(nbRoues: number, poid: number, volTransport: number, marque: string)
    {
        this.nbRoues = nbRoues;
        this.poid = poid;
        this.vTransport = volTransport;
        this.marque = marque;
        this.type = VType.Auto;
    }

    BruitMoteur():string
    {
        return 'vroom';
    }

    AfficherVolumeTransportable():void
    {
        console.log(this.vTransport);
    }
}

const MShelby1967:voiture = new voiture(4,1623, 5,'Mustang');
console.log(MShelby1967.BruitMoteur());
console.log(MShelby1967);

class moto implements Vehicule
{
    nbRoues: number;
    poid: number;
    vTransport: number;
    marque: string;
    type: VType;    

    constructor(nbRoues: number, poid: number, volTransport: number, marque: string)
    {
        this.nbRoues = nbRoues;
        this.poid = poid;
        this.vTransport = volTransport;
        this.marque = marque;
        this.type = VType.Moto;
    }

    BruitMoteur():string
    {
        return 'Mééé...';
    }

    AfficherVolumeTransportable():void
    {
        console.log(this.vTransport);
    }
}

const fatboy:moto = new moto(2,317, 1,'Harley Davidson');
console.log(fatboy.BruitMoteur());
console.log(fatboy);