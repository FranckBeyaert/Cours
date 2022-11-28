const express = require('express');
const router = express.Router();
const sequelize = require('../db/sequelize')

//Récupération de la liste des participants
router.get('/participants', (req, res) => {   
    sequelize.Participant.findAll().then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})

//Récupération d'un participant par id
router.get('/participants/:id', (req,res) => {
    sequelize.Participant.findByPk(req.params.id).then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})

//Ajouter/modification d'un participant
router.post('/participants', (req,res) => {
    sequelize.Participant.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

//Modification d'un participant
router.put('/participants/:id', (req,res) => {
    const participantId = req.params.id
    sequelize.Participant.update(req.body,
        {
            where: { id: participantId }
        }).then(() => {
            sequelize.Participant.findByPk(participantId).then(resultat => {
                res.json({ message: "Modification réalisée avec succés", resultat })
            }).catch(() => {
                res.json({ message: "Erreur !!" })
            })
        }).catch(() => {
            res.json({ message: "Erreur !!" })
        })
})

//Suppression d'une participant
router.delete('/participants/:id', (req,res) => {
    const participantId = req.params.id
    sequelize.Participant.destroy({
        where: { id: participantId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

module.exports = router