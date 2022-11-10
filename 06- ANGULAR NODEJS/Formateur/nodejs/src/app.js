const express = require('express');
const formationApi = require('./services/formation')
const participantApi = require('./services/participant')
const sequelize = require('./db/sequelize');
const basiAuth = require('./basicAuth');
const app = express();
const port = 3000;

app.use(basiAuth)
sequelize.connect();
sequelize.initDb();

app.use(express.json())
app.get('/', (req,res) => {
    res.send('Bonjour M2i')
})

app.get('/test/:id', (req,res) => {
    res.send(`Paramétre : ${req.params.id}`)
})

app.use('/api', formationApi, participantApi)


app.listen(port, () => console.log(`Projet démarré sur : http://localhost:${port}`))