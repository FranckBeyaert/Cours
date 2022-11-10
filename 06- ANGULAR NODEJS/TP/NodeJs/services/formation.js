const express = require('express');
const router= express.Router();
const sequelize = require('../db/sequelize');

//Liste des formations
router.get('/formations', (req,res) =>
{
    sequelize.formationList.findAll().then(resultat =>
        {
            resultat.forEach(element =>
                {
                    element.langages = element.langages.split(',')
                })
            res.json(resultat)
        })
        .catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
});

//Formation par id
router.get('/formations/:id', (req,res) =>
{
    const formationId = req.params.id;
    sequelize.formationList.findByPk(formationId).then(resultat =>
        {
            resultat.langages = resultat.langages.split(',')
            res.json(
                {
                    message : "Formation trouvé",
                    content : resultat
                })
        }).catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
    /*const formation = sequelize.formationList.find(formation => formation.id == formationId)
    res.json({msg:"Formationé demandée", formation})*/

    
});

//Add & edit formation
router.post('/formations', (req,res) =>
{   
    req.body.langages = req.body.langages.join()
    sequelize.formationList.create(req.body).then(resultat =>
        {
            res.json({message: "Création réalisée avec succés", resultat})
        })
        .catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
})

//Modifier une formation
router.put('/formations/:id', (req,res) =>
{
    /*const formationUpdated = req.body
    formations = sequelize.formationList.map(formation =>
        {
            return formation.id == formationId ? formationUpdated : formation
        })
    res.json(formations)*/
    const formationId = req.params.id;
    req.body.langages = req.body.langages.join()
    sequelize.formationList.update(req.body,
        {
            where : {id: formationId}
        }.then(() =>
        {
            sequelize.formationList.findByPk(formationId).then(resultat =>
                {
                    res.json({message: "Modification réalisée avec succés", resultat})
                })
                .catch(()=>
                {
                    res.json({message: 'Erreur !'})
                })
        })
        .catch(() =>
        {
            res.json({message: 'Erreur !'})
        })
    )

    
})

//Suppr une formation
router.delete('/formations/:id',(req,res) =>
{
    const formationId = req.params.id;
    sequelize.formationList.destroy(
        {
            where: {id: formationId}
        }).then(()=>
        {
            res.json({message: "Suppresion réalisée avec succés"})
        }).catch(()=>
        {
            res.json({message: "Erreur !!"})
        })
    //res.json(sequelize.formationList.filter(formation => formation.id != formationId))
})

module.exports = router;