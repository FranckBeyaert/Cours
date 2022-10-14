"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const Personne = {
    name: "David",
    age: 35,
    passions: ["Code", "Star Wars"],
    role: Role.ADMIN
};
let activitesFavorites;
activitesFavorites = ["Football"];
console.log(Personne.name);
Personne.passions.push(activitesFavorites[0]);
for (const activite of Personne.passions) {
    console.log(activite.toUpperCase());
}
if (Personne.role === Role.ADMIN) {
    console.log("is admin");
}
