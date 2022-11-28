const express = require('express');
const router = express.Router();
const sequelize = require('../db/sequelize')
const bcrypt = require('bcrypt')

//Login
router.post('/login', async (req, res) => {
    const userFound = await sequelize.User.findOne({ where : { username: req.body.username }})
    if(userFound == null){        
        return res.status(401).send('Utilisateur inconnu')
    }
    try {
        if( await bcrypt.compare(req.body.password, userFound.password)){
            res.json(userFound)
        } else {
            res.end('Mot de passe incorrect')
        }
    } catch {
        res.status(500).send()
    }
})

module.exports = router

