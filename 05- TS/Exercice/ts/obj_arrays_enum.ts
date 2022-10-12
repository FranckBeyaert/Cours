enum Role {ADMIN = 'admin', READ_ONLY = 'read_only', AUTHOR = 'author'};
const personne :
{
    name : string;
    age : number;
    passion : string[],
    role : Role;
} = 
// const personne = 
{
    name : "Franck",
    age : 25,
    passion : ["Lecture", "Musique", "Jeux Vidéos"],
    role : Role.ADMIN
}

let activitésFavorites : string[];
activitésFavorites = ["Randonnée"];

console.log(personne.name);

personne.passion.push(activitésFavorites[0]);

for(const activités of personne.passion) 
{
    console.log(activités.toUpperCase());
}

if(personne.role === Role.ADMIN)
{
    console.log("is admin");
}
// personne.role[0] = "admin";