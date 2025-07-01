const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('WELCOME TO KULDIP JHA SITE');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
