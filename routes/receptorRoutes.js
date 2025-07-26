// routes/receptorRoutes.js
const express = require('express');
const router = express.Router();
const receptorController = require('../controllers/receptorController');

router.get('/', receptorController.obtenerReceptores);
router.post('/', receptorController.crearReceptor);
router.put('/:id', receptorController.actualizarReceptor);
router.delete('/:id', receptorController.eliminarReceptor);

module.exports = router;
// routes/receptorRoutes.js
// Importar el modelo Receptor