const {Sequelize, DataTypes} = require('sequelize');
const formationModel = require('../models/formation.model');
const participantModel = require('../models/participant.model');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

let formations = [
    { id: 1, nom: 'Angular', date: new Date(), duree: 3, version:'14.2.6', icon: '/assets/img/angular.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['TypeScript', 'Html', 'Css'] },
    { id: 2, nom: 'NodeJs', date: new Date(), duree: 1, version:'16.18.0', icon: '/assets/img/nodejs.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaScript'] },
    { id: 3, nom: 'Symfony', date: new Date(), duree: 5, version:'6.1', icon: '/assets/img/symfony.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['Php', 'Twig'] },
    { id: 4, nom: 'Spring', date: new Date(), duree: 5, version:'5.3.23', icon: '/assets/img/spring.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaEE'] },
];

let participants = 
[{
    id: 1,
    nom: "",
    prenom: "Gandalf",
    sexe: "Masculin",
    age: 2000,
    espece: "Maia",
    

},
{
    id: 2,
    nom: "Gamegie",
    prenom: "Samsagace",
    sexe: "Masculin",
    age: 38,
    espece: "Hobbit",
    
},
{
    id: 3,
    nom: "",
    prenom: "Aragorn",
    sexe: "Masculin",
    age: 87,
    espece: "Númenorien",
    
},
{
    id: 4,
    nom: "",
    prenom: "Gimli",
    sexe: "Masculin",
    age: 139,
    espece: "Nain",
    
},
{
    id: 5,
    nom: "Sacquet",
    prenom: "Frodon",
    sexe: "Masculin",
    age: 50,
    espece: "Hobbit",
    
},
{
    id: 6,
    nom: "Vertefeuille",
    prenom: "Legolas",
    sexe: "Masculin",
    age: 2000,
    espece: "Elfe Sinda",
    
}
]

const sequelize = new Sequelize(
    'formation', // nom de la bdd
    'root', // user
    'admin', // mdp
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

const participantList = participantModel(sequelize, DataTypes)
const formationList = formationModel(sequelize, DataTypes)
const user = userModel(sequelize, DataTypes)

const connect = () =>
{
    sequelize.authenticate().then(() =>
    {
        console.log('Connexion établie')
    })
    .catch((error) =>
    {
        console.log('Connexion KO', error)
    })
}

const initDb = () =>
{
    sequelize.sync({force:true}).then(() =>
    {
        console.log('Base de donnée à jour')
        setTimeout(() =>
        {
            bcrypt.hash('admin', 10).then(hash =>
                {
                    user.create(
                    {
                        username: 'admin',
                        password: 'admin'
                    })
                })
            formations.map(formation => 
                {
                    formationList.create( //Equivalent de Insert INTO 
                        {
                            nom: formation.nom,
                            version: formation.version,
                            duree: formation.duree,
                            date: formation.date,
                            icon: formation.icon,
                            formateur: formation.formateur,
                            langages: formation.langages.join()
                        })
                })
            participants.map(participant  =>
                {
                    participantList.create(
                        {
                            nom: participant.nom,
                            prenom: participant.prenom,
                            age: participant.age,
                            sexe: participant.sexe,
                            espece: participant.espece,
                        }
                    )
                })
        },3000)
    })
    .catch((error) =>
    {
        console.log('Erreur lors de la mise à jours', error)
    })
}

module.exports = {connect,initDb, formationList, participantList, user}
