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

// enum VType
// {
//     Auto,
//     Camion,
//     Moto
// }

// abstract class Vehicule
// {
//     private nbRoues: number;
//     private poid: number;
//     private vTransport: number;
//     private marque: string;
//     private type: VType;
    

//     abstract BruitMoteur():void;
//     abstract AfficherVolumeTransportable():void;

//     constructor(nbRoues: number, poid: number, marque: string,
//         volume: number, type: VType)
//         {
//             this.nbRoues = nbRoues;
//             this.poid = poid;
//             this.marque = marque;
//             this.vTransport = volume;
//             this.type = VType;
//         }
// }

// class voiture extends Vehicule
// {
//    private volume: number;
//    constructor(volume: number, marque: string)
//    {
//         super(4,1000, volume, marque, VType.Auto);
//         this.volume = volume;
//    }

//     BruitMoteur():void
//     {
//         console.log('vroom');
//     }

//     AfficherVolumeTransportable():void
//     {
//         console.log(this.volume + "L");
//     }
// }

// const MShelby1967 = new voiture(200,'Mustang');
// console.log(MShelby1967.BruitMoteur());
// console.log(MShelby1967);

// class moto implements Vehicule
// {
//     nbRoues: number;
//     poid: number;
//     vTransport: number;
//     marque: string;
//     type: VType;    

//     constructor(nbRoues: number, poid: number, volTransport: number, marque: string)
//     {
//         this.nbRoues = nbRoues;
//         this.poid = poid;
//         this.vTransport = volTransport;
//         this.marque = marque;
//         this.type = VType.Moto;
//     }

//     BruitMoteur():string
//     {
//         return 'M??????...';
//     }

//     AfficherVolumeTransportable():void
//     {
//         console.log(this.vTransport);
//     }
// }

// const fatboy:moto = new moto(2,317, 1,'Harley Davidson');
// console.log(fatboy.BruitMoteur());
// console.log(fatboy);