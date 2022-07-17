const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});

app.get('/src/js/modify.js', function (req, res) {
    res.sendFile(__dirname + '/src/js/modify.js');
});