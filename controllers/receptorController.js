// controllers/receptorController.js
const Receptor = require('../models/Receptor');

// Obtener todos los receptores
exports.obtenerReceptores = async (req, res) => {
  try {
    const receptores = await Receptor.findAll();
    res.json(receptores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener receptores' });
  }
};

// Crear nuevo receptor
exports.crearReceptor = async (req, res) => {
  try {
    const nuevo = await Receptor.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear receptor', detalle: error.message });
  }
};

// Actualizar receptor por ID
exports.actualizarReceptor = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Receptor.update(req.body, {
      where: { ID_Receptor: id }
    });

    if (actualizado === 0) {
      return res.status(404).json({ mensaje: 'Receptor no encontrado' });
    }

    res.status(200).json({ mensaje: 'Receptor actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar receptor', error: error.message });
  }
};

// Eliminar receptor por ID
exports.eliminarReceptor = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Receptor.destroy({
      where: { ID_Receptor: id }
    });

    if (eliminado === 0) {
      return res.status(404).json({ mensaje: 'Receptor no encontrado' });
    }

    res.status(200).json({ mensaje: 'Receptor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar receptor', error: error.message });
  }
};
