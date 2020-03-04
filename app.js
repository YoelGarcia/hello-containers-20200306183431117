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

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", ""); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/


app.listen(3000);
console.log("Servidor corriendo");