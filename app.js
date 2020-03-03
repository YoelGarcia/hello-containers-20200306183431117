//const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');

//const publicPath = path.join(__dirname, '../public');

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.use(express.static('public'))

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log("Servidor corriendo");