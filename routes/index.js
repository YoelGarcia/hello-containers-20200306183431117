const { Router } = require('express'); 
const { port }  = require('../app');


const router = Router();


const { getUsers, createFeedback } = require('../controllers/index.controller')



router.get('/', getUsers);
//router.get('/guardar', createFeedback);
router.post('/guardar', createFeedback);

module.exports = router;