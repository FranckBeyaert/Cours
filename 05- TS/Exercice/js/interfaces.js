"use strict";
// Interface
// const p1 : PersonInfo = 
// {
//     firstname : "John",
//     lastname : "Doe",
//     agePerson : 30,
//     greeting(phrase : string)
//     {
//         console.log(phrase + " " + this.firstname);
//     }
// }
class Person2 {
    constructor(firstname, agePerson, lastname) {
        this.firstname = firstname;
        if (lastname) {
            this.lastname = lastname;
        }
        this.agePerson = agePerson;
    }
    printAge() {
        console.log(this.agePerson + "ans");
    }
    greeting(phrase) {
        console.log(phrase);
    }
}
const p2 = new Person2("John", 30, "Doe");
p2.printAge();
p2.greeting("Banana !!");
console.log(p2);
