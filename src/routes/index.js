const path = require('path');
const usersController = require('../controllers/UsersController');

module.exports = function(app) {

    app.get('/', (req, res) =>
    res.render(path.join(__dirname, '../views/index.ejs'))
    );

    app.get('/users', usersController.usersView)
    
    app.get('/user/:id', usersController.userView)

    app.get ('/addUserView', usersController.addUserView)

    app.post('/addUser', usersController.addUser)
};