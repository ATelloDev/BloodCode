const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');

router.get('/', mensajeController.obtenerMensajes);
router.post('/', mensajeController.crearMensaje);
router.put('/:id', mensajeController.actualizarMensaje);
router.delete('/:id', mensajeController.eliminarMensaje);

module.exports = router;
