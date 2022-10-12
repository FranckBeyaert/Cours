"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["READ_ONLY"] = "read_only";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
;
const personne = 
// const personne = 
{
    name: "Franck",
    age: 25,
    passion: ["Lecture", "Musique", "Jeux Vidéos"],
    role: Role.ADMIN
};
let activitésFavorites;
activitésFavorites = ["Randonnée"];
console.log(personne.name);
personne.passion.push(activitésFavorites[0]);
for (const activités of personne.passion) {
    console.log(activités.toUpperCase());
}
if (personne.role === Role.ADMIN) {
    console.log("is admin");
}
// personne.role[0] = "admin";
