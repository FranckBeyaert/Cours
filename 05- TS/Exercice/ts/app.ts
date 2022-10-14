//Modules

import{PersonPrintAge} from './components/PersonMethods';

class Person2 implements PersonInfo
{
    firstname : string;
    lastname ?: string;
    agePerson : number;

    constructor(firstname : string,agePerson : number, lastname ?: string )
    {
        this.firstname = firstname;
        if(lastname)
        {
            this.lastname = lastname;
        }
        this.agePerson = agePerson;
    }

    printAge(): void
    {
        console.log(this.agePerson + "ans");
    }

    greeting(phrase : string): void
    {
        console.log(phrase);
    }
}