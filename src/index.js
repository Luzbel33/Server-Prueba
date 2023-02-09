const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () =>
    console.log(`Server running on port ${port}`)
);

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/index.html'))
    );

    app.get('/productos', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/productos.html'))
    );

    app.get('/productos/1', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/productos2.html'))
    );