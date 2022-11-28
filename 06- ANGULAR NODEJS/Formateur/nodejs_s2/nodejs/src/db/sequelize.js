const {Sequelize, DataTypes} = require('sequelize');
const formationModel = require('../models/formation.model');
const participantModel = require('../models/participant.model');
const userModel = require('../models/user.model');
const roleModel = require('../models/role.model');
const bcrypt = require('bcrypt');

let formations = [
    { id: 1, nom: 'Angular', date: new Date(), duree: 3, version: '', icon: '/assets/img/angular.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['TypeScript', 'Html', 'Css'] },
    { id: 2, nom: 'NodeJs', date: new Date(), duree: 1, version: '', icon: '/assets/img/nodejs.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaScript'] },
    { id: 3, nom: 'Symfony', date: new Date(), duree: 5, version: '', icon: '/assets/img/symfony.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['Php', 'Twig'] },
    { id: 4, nom: 'Spring', date: new Date(), duree: 5, version: '', icon: '/assets/img/spring.png', formateur: 'Mehdy EL MOUTAOUKIL', langages: ['JavaEE'] },
]

let participants = [
    { id: 1, nom: 'Remi', prenom: 'Morau', sexe: 'M', age: '25'},
    { id: 2, nom: 'Didier', prenom: 'Fournier', sexe: 'M', age: '22'},
    { id: 3, nom: 'Rebecca', prenom: 'Douchy', sexe: 'F', age: '21'}
]
const sequelize = new Sequelize(
    'formations', //nom de la base de données
    'root', //utilisateur
    'root', //mot de passe
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Formation = formationModel(sequelize,DataTypes)
const Participant = participantModel(sequelize, DataTypes)
const Role = roleModel(sequelize, DataTypes)
const User = userModel(sequelize, DataTypes)
Role.hasMany(User, {
    foreignKey : 'roleId'
});

const connect = () => {
    sequelize.authenticate().then(() =>{
        console.log('Connexion établie');
    }).catch((error)=>{
        console.log('Connexion KO',error);
    })
}

const initDb = () => {
    sequelize.sync({force:true}).then(() => {
        console.log('Base de données à jour');
        setTimeout(() => {
            Role.create({role: 'ADMIN'}),
            Role.create({role: 'USER'}),
            bcrypt.hash('mehdy', 10).then(hash => {
                User.create({
                    username: 'mehdy',
                    password: hash,
                    role: 'USER',
                    roleId: 2,
                })
            }),
            bcrypt.hash('admin', 10).then(hash => {
                User.create({
                    username: 'admin',
                    password: hash,
                    role: 'ADMIN',
                    roleId: 1,
                })
            }),
            
            formations.map(formation => {
                Formation.create({
                   nom: formation.nom,
                   version: formation.version,
                   duree: formation.duree,
                   date: formation.date,
                   icon: formation.icon,
                   formateur: formation.formateur,
                   langages: formation.langages.join() 
                })
            }),
            participants.map(participant => {
                Participant.create({
                    nom: participant.nom,
                    prenom: participant.prenom,
                    age: participant.age,
                    sexe: participant.sexe
                })
            })
        }, 3000)
        
        
    }).catch((error)=>{
        console.log('Erreur lors de la mise à jour',error);
    })
}

module.exports = {
    connect, initDb, Formation, Participant, User
};