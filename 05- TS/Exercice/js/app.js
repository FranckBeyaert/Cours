//Modules
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
export {};
