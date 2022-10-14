


enum Role { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY" , AUTHOR = "AUTHOR" };

const Personne : {
    name : string;
    age : number;
    passions : string[];
    role : Role
} =  {
    name : "David",
    age: 35,
    passions : ["Code", "Star Wars"],
    // role : [2, "author"]
    role: Role.ADMIN
}

let activitesFavorites: string[];
activitesFavorites = ["Football"];

console.log(Personne.name);


Personne.passions.push(activitesFavorites[0]);

for (const activite of Personne.passions) {
    console.log(activite.toUpperCase());
}

// Personne.role[0] = "admin";

if(Personne.role === Role.ADMIN){
    console.log("is admin");
}
