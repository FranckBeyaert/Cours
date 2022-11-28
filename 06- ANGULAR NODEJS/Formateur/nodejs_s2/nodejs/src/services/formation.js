const express = require('express');
const router = express.Router();
const sequelize = require('../db/sequelize')

//Liste des formations
router.get('/formations', (req, res) => {
    sequelize.Formation.findAll().then(resultat => {
        resultat.forEach(element => {
            element.langages = element.langages.split(',');
        })
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})

//Formation par id
router.get('/formations/:id', (req, res) => {
    sequelize.Formation.findByPk(req.params.id).then(resultat => {
        resultat.langages = resultat.langages.split(',');
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})


//Ajouter/modifier une formation
router.post('/formations', (req, res) => {
    req.body.langages = req.body.langages.join()
    sequelize.Formation.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})

//Modifier une formation
router.put('/formations/:id', (req, res) => {
    const formationId = req.params.id
    req.body.langages = req.body.langages.join()
    sequelize.Formation.update(req.body,
        {
            where: { id: formationId }
        }).then(() => {
            sequelize.Formation.findByPk(formationId).then(resultat => {
                res.json({ message: "Modification réalisée avec succés", resultat })
            }).catch(() => {
                res.json({ message: "Erreur !!" })
            })
        }).catch(() => {
            res.json({ message: "Erreur !!" })
        })
})

//Supprimer une formation
router.delete('/formations/:id', (req, res) => {
    const formationId = req.params.id
    sequelize.Formation.destroy({
        where: { id: formationId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})


module.exports = router;