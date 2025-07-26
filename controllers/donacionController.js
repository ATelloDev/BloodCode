// controllers/donacionController.js
const Donacion = require('../models/Donacion');
const Donador = require('../models/Donador');
const Receptor = require('../models/Receptor');

// Obtener todas las donaciones
exports.obtenerDonaciones = async (req, res) => {
  try {
    const donaciones = await Donacion.findAll({
      include: [Donador, Receptor] // Incluye datos relacionados
    });
    res.json(donaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener donaciones' });
  }
};

// Crear una nueva donación
exports.crearDonacion = async (req, res) => {
  try {
    const nueva = await Donacion.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear donación', detalle: error.message });
  }
};

// Actualizar donación por ID
exports.actualizarDonacion = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Donacion.update(req.body, {
      where: { ID_Donacion: id }
    });

    if (actualizado === 0) {
      return res.status(404).json({ mensaje: 'Donación no encontrada' });
    }

    res.status(200).json({ mensaje: 'Donación actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar donación', error: error.message });
  }
};

// Eliminar donación por ID
exports.eliminarDonacion = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Donacion.destroy({
      where: { ID_Donacion: id }
    });

    if (eliminado === 0) {
      return res.status(404).json({ mensaje: 'Donación no encontrada' });
    }

    res.status(200).json({ mensaje: 'Donación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar donación', error: error.message });
  }
};
