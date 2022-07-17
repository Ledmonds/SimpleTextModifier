const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});

app.get('/src/js/textModifier.js', function (req, res) {
    res.sendFile(__dirname + '/src/js/textModifier.js');
});

app.get('/src/js/textRenderer.js', function (req, res) {
    res.sendFile(__dirname + '/src/js/textRenderer.js');
});