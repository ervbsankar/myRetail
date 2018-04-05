const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/api/item', (req, res) => {
    return res.sendFile(path.join(__dirname, 'item-data.json'));
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});

