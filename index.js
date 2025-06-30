const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi kuldip how are you this is update runing on pm2 auto');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
