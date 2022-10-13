"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, code) {
        super(name);
        this.empCode = code;
    }
    find(name) {
        return new Employee(name, 1);
    }
}
let emp = new Employee("James", 100);
emp.display();
let emp2 = emp.find("Steve");
console.log(emp2);
var VType;
(function (VType) {
    VType[VType["Auto"] = 0] = "Auto";
    VType[VType["Camion"] = 1] = "Camion";
    VType[VType["Moto"] = 2] = "Moto";
})(VType || (VType = {}));
class Vehicule {
}
class voiture {
    constructor(nbRoues, poid, volTransport, marque) {
        this.nbRoues = nbRoues;
        this.poid = poid;
        this.vTransport = volTransport;
        this.marque = marque;
        this.type = VType.Auto;
    }
    BruitMoteur() {
        return 'vroom';
    }
    AfficherVolumeTransportable() {
        console.log(this.vTransport);
    }
}
const MShelby1967 = new voiture(4, 1623, 5, 'Mustang');
console.log(MShelby1967.BruitMoteur());
console.log(MShelby1967);
class moto {
    constructor(nbRoues, poid, volTransport, marque) {
        this.nbRoues = nbRoues;
        this.poid = poid;
        this.vTransport = volTransport;
        this.marque = marque;
        this.type = VType.Moto;
    }
    BruitMoteur() {
        return 'Mééé...';
    }
    AfficherVolumeTransportable() {
        console.log(this.vTransport);
    }
}
const fatboy = new moto(2, 317, 1, 'Harley Davidson');
console.log(fatboy.BruitMoteur());
console.log(fatboy);
