//const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');

//const publicPath = path.join(__dirname, '../public');

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.use(express.static('public'))

//routes
app.use(require('./routes/index'));

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;


app.listen(port);
console.log('' + port);
console.log("Servidor corriendo");

exports.Puerto = '' + port;