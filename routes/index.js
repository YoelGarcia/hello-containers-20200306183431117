const { Router } = require('express'); 

const router = Router();


const { getUsers, createFeedback } = require('../controllers/index.controller')

router.get('/', getUsers);
router.post('/a', createFeedback);

module.exports = router;