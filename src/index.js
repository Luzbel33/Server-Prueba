const express = require('express');
const path = require('path');
const port = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
    console.log('listening on port ${port}');
});