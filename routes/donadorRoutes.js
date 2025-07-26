// routes/donadorRoutes.js
const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/donadorController');

// Obtener todos los donadores
router.get('/', donadorController.obtenerDonadores);

// Crear un nuevo donador
router.post('/', donadorController.crearDonador);

// Actualizar un donador existente por ID
router.put('/:id', donadorController.actualizarDonador);

// Eliminar un donador por ID
router.delete('/:id', donadorController.eliminarDonador);

module.exports = router;
