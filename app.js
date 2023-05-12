const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.get('/send', (req, res) => {
    res.json([{
        id: 1, product: 'tv'
    }, {
        id: 2, product: 'phone'
    }])
});

app.listen(PORT, () => {
    console.log(`the port is listening on ${PORT}`)
});