const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.obtenerAdministradores);
router.post('/', adminController.crearAdministrador);
router.put('/:id', adminController.actualizarAdministrador);
router.delete('/:id', adminController.eliminarAdministrador);

module.exports = router;
