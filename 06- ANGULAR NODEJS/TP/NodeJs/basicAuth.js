const auth = require('basic-auth')
const sequelize = require('./db/sequelize')
const bcrypt = require('bcrypt')

const basicAuth = async (req, res, next) => 
{
    const user = auth(req)
    if(user == null)
    {
        return res.status(401).send('Authentification Required')
    }

    const userFound = await sequelize.user.findOne({where: {username: user.name}})
    if(userFound == null)
    {
        return res.status(401).send('Unknow User')
    }
    try
    {
        if(await bcrypt.compare(user.pass, userFound.password))
        {
            console.log('authentification ok')
            next()
        }
        else
        {
            res.send('Accés refusé')
        }
    }
    catch
    {
        res.status(500).send()
    }
}

module.exports = basicAuth