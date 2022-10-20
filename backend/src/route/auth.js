const { Router } = require('express');
const { crearUsuario, loginUsuario } = require('../controller/authController');


const router = Router();

//Crear usuario
router.post('/register',crearUsuario)


//Login usuario
router.post('/', loginUsuario)


module.exports = router;