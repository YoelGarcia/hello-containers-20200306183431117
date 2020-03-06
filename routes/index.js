const { Router } = require('express'); 
const { port }  = require('../app');


const router = Router();


const { getUsers, createFeedback, llamarAsistente } = require('../controllers/index.controller')



router.get('/', getUsers);
//router.get('/guardar', createFeedback);
router.get('/asistente', llamarAsistente);
router.post('/guardar', createFeedback);

module.exports = router;