// routes/donacionRoutes.js
const express = require('express');
const router = express.Router();
const donacionController = require('../controllers/donacionController');

router.get('/', donacionController.obtenerDonaciones);
router.post('/', donacionController.crearDonacion);
router.put('/:id', donacionController.actualizarDonacion);
router.delete('/:id', donacionController.eliminarDonacion);

module.exports = router;
