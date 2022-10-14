// Interface


type Combinable2 = string | number //alias

// type PersonInfo = 
// {
//     firstname : string,
//     lastname : string,
//     age : number
// }

// type PersonInfo = 
// {
//     username : string
// }

interface PersonInfo
{
    firstname : string;
    lastname ?: string;
}

interface PersonInfo
{
    agePerson : number;
    greeting(phrase : string) : void;
}

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


const p2 = new Person2("John", 30, "Doe");
p2.printAge();
p2.greeting("Banana !!");
console.log(p2);

