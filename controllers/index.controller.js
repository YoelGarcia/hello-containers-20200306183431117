const { Pool } = require('pg');
var port = require('../app.js');

const pool = new Pool ({
    host: 'dc512cab-9b0b-4c5e-aa14-93ced28a5699.bn2a2uid0up8mv7mv2ig.databases.appdomain.cloud',
    user: 'ibm_cloud_41ab3d28_022e_48b2_bc02_5f41bd95bf88',
    password: 'cf54f09209aa618654ab27fad46442ff683297f050ed9a047f15612778533b95',
    database: 'ibmclouddb',
    port: '30148',
    ssl: true
})

const guardarUsers = async(req, res) => {
    console.log("aqui se guardan los datos");
}

const getUsers = async(req, res) => {
    //const response = await pool.query('SELECT * FROM feedback')
    //console.log(response.rows);
    console.log('El puerto es: ' + port.Puerto);
    const puerto = port.Puerto;
    res.render('../views/layouts/default.hbs', {
        puerto: puerto
    });
}

const createFeedback = async(req, res) => {
    console.log(req.body);
    const { nombre, telefono, email, parecerEvento,
            parecerSesion, conocerNube, aplicacionesContenerizadas,
            ayudarModernizar, plataformaContenedores, ayudaContacto, promosIbm } = req.body;
    const response = await pool.query('INSERT INTO feedback (nombre, telefono, email, parecerEvento, parecerSesion, conocerNube, \
        aplicacionesContenerizadas, ayudarModernizar, plataformaContenedores, ayudaContacto, promosIbm ) \
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [
        nombre, telefono, email, parecerEvento, parecerSesion, conocerNube, aplicacionesContenerizadas, ayudarModernizar,
        plataformaContenedores, ayudaContacto, promosIbm
    ]);
    console.log(response);
    res.send("Usuario creado");
};

module.exports = {
    getUsers,
    createFeedback
}