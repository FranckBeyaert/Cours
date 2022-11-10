const express = require('express');
const router= express.Router();
const sequelize = require('../db/sequelize')

//Get Liste
router.get('/participants', (req,res) =>
{
    sequelize.participantList.findAll().then(resultat =>
        {
            resultat.forEach(element => 
                {
                    element.langages = element.langages.split(',')
                })
                res.json( resultat)
        }).catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
});

//Get id
router.get('/participants/:id', (req,res) =>
{
    const participantId = req.params.id;
    sequelize.participantList.findByPk(participantId).then(resultat =>
        {
            resultat.langages = resultat.langages.split(',')
            res.json(
                {
                    message : "Participant trouvé",
                    content : resultat
                })
        }).catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
    /*const participant = participants.find(participant => participant.id == participantId)
    res.json({msg:"Participant demandé", participant})*/
});


router.post('/participant', (req,res) =>
{
    sequelize.participantList.create(req.body).then(resultat =>
        {
            res.json({message: "Création réalisée avec succés", resultat})
        })
        .catch(()=>
        {
            res.json({message: 'Erreur !'})
        })
    /*participants.push(req.body);
    res.json(participants);*/
})

/*router.put('/participants', (req,res) =>
{
    const participantUp = req.body
    participants = participants.map(participant =>
        {
            return participant == participantUp
        })
    res.json(participants)
})*/

router.put('/participant/:id', (req,res) =>
{
    /*const participantUp = req.body
    participants = participants.map(participant =>
        {
            return participant.id == participantId ? participantUp : participant
        })
    )
    res.json(participants)*/
    const participantId = req.params.id;
    sequelize.participantList.update(req.body,
        {
            where : {id: participantId}
        }.then(() =>
        {
            sequelize.participantList.findByPk(participantId).then(resultat =>
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



//Delete Liste
/*router.delete('/participant', (req,res) =>
{
    res.json(participants = '')
})*/

//Delete id
router.delete('/participant/:id',(req,res) =>
{
    const participantId = req.params.id;
    sequelize.participantList.destroy(
        {
            where: {id: participantId}
        }).then(()=>
        {
            res.json({message: "Suppresion réalisée avec succés"})
        }).catch(()=>
        {
            res.json({message: "Erreur !!"})
        })
    //res.json(participants.filter(participant => participant.id != participantId))
})

module.exports = router;