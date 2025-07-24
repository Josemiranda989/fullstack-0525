var express = require('express');
const {list}= require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', list);
router.get('/listado', list);
router.get('/login', list);

module.exports = router;
