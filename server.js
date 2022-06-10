

const express = require('express');

const app = express();

app.use(express.static('./dist/levantti-cred'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/levantti-cred/' }),
);

app.listen(process.env.PORT || 8080);