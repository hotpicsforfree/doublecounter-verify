                                
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const WEBHOOK_URL = "https://discord.com/api/webhooks/1347749535241207818/20z6Xg2BzVI5uFBp65YOIcFfvufM_SbX_z5T6hMVVdCdUvvdxtg8pghzcPzWCKoJF_P0";

app.use(express.json());

app.post('/webhook', async (req, res) => {
    const ip = req.body.ip;

    try {
        await axios.post(WEBHOOK_URL, {
            content: `Visitor IP: ${ip}`
        });
        res.sendStatus(200);
    } catch (error) {
        console.error('Error sending IP to webhook:', error);
        res.sendStatus(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
