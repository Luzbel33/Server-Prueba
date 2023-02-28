const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const usersController = require('./controllers/UsersController');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

    app.get('/', (req, res) =>
    res.render(path.join(__dirname, 'views/index.ejs'))
    );

    app.get('/users', usersController.usersView)
    
    app.get('/user/:id', usersController.userView)

    app.listen(port, () => {
        console.log('listening on port ${port}');
    });