const fs = require('fs');
const path = require('path');
const User = require('../models/UserModel');
const usersFilePath = path.join(__dirname, '../data/Users.json');

const getUsers = () => {
    const users = fs.readFileSync(usersFilePath, 'utf8');
    const usersJson = JSON.parse(users);
    return usersJson.user;
};

const usersView = (req, res) => {
    const users = getUsers();
    res.render(path.join(__dirname, '../views/users/users.ejs'), { users })
}

const userView = (req, res) => {
    const users = getUsers();
    const user = users.find(user => user.id == req.params.id);
    res.render(path.join(__dirname, '../views/users/user.ejs'), { user });
};

const addUserView = (req, res) => { 
    res.render(path.join(__dirname, '../views/users/addUser.ejs'));
};

const addUser = (req, res) => { 
    console.log(req.body)
    res.render(path.join(__dirname, '../views/users/addUser.ejs'));
}

module.exports = {
   usersView,
   userView,
   addUserView,
   addUser
};