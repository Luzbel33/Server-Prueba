const fs = require('fs');
const path = require('path');
const User = require('../models/UserModel');
const usersFilePath = path.join(__dirname, '../data/Users.json');

const getUsers = () => {
    const users = fs.readFileSync(usersFilePath, 'utf8');
    console.log(users);
    const usersJson = JSON.parse(users);
    return usersJson.usuarios;
};

const usersView = (req, res) => {
    const users = getUsers();
    res.render(path.join(__dirname, '../views/users.ejs'), { users })
}

const userView = (req, res) => {
    const users = getUsers();
    const user = users.find(user => user.id == req.params.id);
    res.render(path.join(__dirname, '..views/user.ejs'), { user });
};

module.exports = {
   usersView,
   userView
};