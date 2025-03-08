require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

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
