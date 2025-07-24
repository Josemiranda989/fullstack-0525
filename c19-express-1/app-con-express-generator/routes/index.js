var express = require('express');
// Esto importamos del controlador propio 
// const indexController = require('../controllers/indexController');
const {home, contact} = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
// router.get('/', indexController.home);
router.get('/', home);

/* GET contact page. */
// router.get('/contacto', indexController.contact);
router.get('/contacto', contact);

module.exports = router;
