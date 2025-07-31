var express = require('express');
const {index, detail} = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index);

/* GET home page. */
router.get('/menu/:id', detail);


module.exports = router;
