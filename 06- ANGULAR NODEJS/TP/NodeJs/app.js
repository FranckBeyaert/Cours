const express = require('express');
const sequelize = require('./db/sequelize');
const formationApi = require('./services/formation')
const participantApi = require('./services/participant')
const basicAuth = require('./basicAuth')
const app = express();
const port = 3000;

app.use(basicAuth)

sequelize.connect()
sequelize.initDb()

app.use(express.json());
app.get('/', (req,res) =>
{
    res.send('BANANA!')
})

app.use('/api',formationApi);
app.use('/api',participantApi)

app.listen(port, () => console.log(`Projet démarré sur : http://localhost:${port}`));